---
description: 回覧板の新しい号を追加・更新する際の手順
---

# 回覧板（kairanban）更新ワークフロー

ユーザーが `public/kairanban/{号数}/` フォルダにPDFをアップロードした後の処理手順。

## 前提条件
- PDFファイルはファイル名の先頭に番号を付ける（例: `1.○○.pdf`, `2.○○.pdf`）
- 非公開ファイルはファイル名末尾に `※非公開` を含む
- 【配布】と書いてあるファイルは公開・非公開の場合がある（※非公開の有無で判断）

---

## 手順

### 1. フォルダのPDF一覧を確認
```powershell
Get-ChildItem "d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\kairanban\{号数}"
```

### 2. PDFの中身を読み取り（pdfplumber使用）
```python
import pdfplumber
import os

base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\kairanban\{号数}"
output_file = r"d:\Github\yasuzuka-minami2\pdf_output.txt"

with open(output_file, "w", encoding="utf-8") as out:
    for filename in sorted(os.listdir(base_dir)):
        if not filename.endswith(".pdf"):
            continue
        filepath = os.path.join(base_dir, filename)
        out.write(f"\n--- {filename} ---\n")
        if "非公開" in filename:
            out.write("[非公開ファイル - スキップ]\n")
            continue
        try:
            with pdfplumber.open(filepath) as pdf:
                text = ""
                for page in pdf.pages[:2]:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text + "\n"
                if text.strip():
                    out.write(text[:1000] + "\n")
                else:
                    out.write("[テキスト抽出不可 - スキャン画像PDF]\n")
        except Exception as e:
            out.write(f"[エラー: {e}]\n")
print("完了")
```

- 抽出したテキストを元に、各PDFの紹介文（description）を作成する
- スキャン画像PDFでテキスト抽出不可の場合は、ファイル名から推測して紹介文を書く

### 3. コードの更新

#### 3-1. データファイルの更新
ファイル: `lib/kairanban-data.ts`

新しい号のデータを追加する。以下の形式に従う:

```typescript
"{号数}": {
  issueNumber: "第○号",
  date: "2026年○月○日",
  items: [
    {
      title: "1. ○○○",
      pdfUrl: "/kairanban/{号数}/1.○○○.pdf",
      description: "PDFの内容から作成した紹介文",
      isPrivate: false,
    },
    // ※非公開ファイルの場合:
    {
      title: "○.【配布】○○○",
      pdfUrl: "",  // 空文字にする
      description: "個人情報が含まれるため非公開となります。組長へお問い合わせください。",
      isPrivate: true,  // trueにする
    },
  ],
  formUrl: "https://docs.google.com/forms/d/e/...",
},
```

#### 3-2. 一覧ページの更新
ファイル: `app/kairanban/page.tsx`

`kairanbanIssues` 配列の先頭に新しい号を追加:

```typescript
{
  id: {号数},
  issueNumber: "第○号",
  date: "2026年○月○日",
  itemCount: {件数},
  summary: "各項目のタイトルをカンマ区切りで列挙",
},
```

#### 3-3. generateStaticParamsの更新
ファイル: `app/kairanban/[id]/page.tsx`

`generateStaticParams` に新しいIDを追加:
```typescript
return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '{新しい号数}' }]
```

### 4. ※非公開ファイルの処理

> [!CAUTION]
> 非公開ファイルは個人情報を含むため、**必ずサーバーから削除すること**。

```powershell
# -LiteralPathを使うこと（[id]フォルダのブラケット対策）
Remove-Item -LiteralPath "d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\kairanban\{号数}\{非公開ファイル名}" -Force
```

- コード上は項目を残す（`isPrivate: true`, `pdfUrl: ""`）
- 🔒 Lockアイコンと注記が自動表示される

### 5. 結合PDF（all.pdf）の作成

```python
from pypdf import PdfWriter, PdfReader
import os

base_dir = r"d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\kairanban"

for issue_id in ["1", "2", "3"]:  # ← 新しい号数を追加
    issue_dir = os.path.join(base_dir, issue_id)
    output_path = os.path.join(issue_dir, "all.pdf")
    
    pdf_files = sorted([
        f for f in os.listdir(issue_dir)
        if f.endswith(".pdf") and "非公開" not in f and f != "all.pdf"
    ])
    
    writer = PdfWriter()
    for pdf_file in pdf_files:
        reader = PdfReader(os.path.join(issue_dir, pdf_file))
        for page in reader.pages:
            writer.add_page(page)
    
    with open(output_path, "wb") as f:
        writer.write(f)
    print(f"第{issue_id}号: {len(pdf_files)}件 → all.pdf")
```

### 6. 一時ファイルの削除
// turbo
```powershell
Remove-Item d:\Github\yasuzuka-minami2\extract_pdf.py, d:\Github\yasuzuka-minami2\pdf_output.txt, d:\Github\yasuzuka-minami2\merge_pdfs.py -ErrorAction SilentlyContinue
```

### 7. デプロイ
`/deploy` ワークフローを実行してGitHub Pagesにデプロイする。

---

## チェックリスト

- [ ] PDFフォルダの確認
- [ ] PDFテキスト抽出 → 紹介文作成
- [ ] `lib/kairanban-data.ts` にデータ追加
- [ ] `app/kairanban/page.tsx` に一覧データ追加
- [ ] `app/kairanban/[id]/page.tsx` の `generateStaticParams` 更新
- [ ] ※非公開ファイルをサーバーから削除
- [ ] 結合PDF（all.pdf）の作成
- [ ] 一時ファイルの削除
- [ ] デプロイ
