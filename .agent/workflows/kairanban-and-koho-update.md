---
description: 回覧板（kairanban）と広報（koho）を同時に新しい号・回に更新する手順
---

# 回覧板＋広報 同時更新ワークフロー

ユーザーが以下のフォルダにPDFを配置済みの状態からスタートする。

- `my-app/public/kairanban/{号数}/` ← 回覧板PDFファイル群
- `my-app/public/koho/{回数}/` ← 広報PDFファイル群
- `my-app/public/kairanban/archive/{日付}令和8年度回覧板配布一覧.pdf` ← 配布一覧PDF

ユーザーが「kairanban{N} koho{N} 更新して」と言ったらこのワークフローを実行する。

---

## 事前確認

```bash
# 回覧板フォルダのPDF一覧
ls my-app/public/kairanban/{号数}/

# 広報フォルダのPDF一覧
ls my-app/public/koho/{回数}/

# アーカイブフォルダのPDF一覧（最新ファイル名を確認）
ls my-app/public/kairanban/archive/
```

---

## 更新手順

### 1. lib/kairanban-data.ts（回覧板データ追加）

`kairanbanData` オブジェクトの**先頭**（既存の最新号の上）に新しい号を追加する。

```typescript
"{号数}": {
    issueNumber: "第○号",
    date: "2026年○月○日",
    items: [
        {
            title: "1. ○○○",
            pdfUrl: "/kairanban/{号数}/1.○○○.pdf",
            description: "ファイル名・内容から作成した紹介文。",
            isPrivate: false,
        },
        // 非公開ファイルの場合
        {
            title: "2.【非公開】○○○",
            pdfUrl: "",        // 空文字
            description: "個人情報のため非公開（組長へお問い合わせください）。",
            isPrivate: true,
        },
    ],
    formUrl: "", // Google FormsのURLがあれば設定
},
```

**注意事項:**
- ファイル名に「非公開」「private」「名簿」「緊急連絡網」「宮当番」が含まれる場合は `isPrivate: true`、`pdfUrl: ""`
- ファイル名の番号順に並べる
- descriptionはファイル名から内容を推測して日本語で記述

---

### 2. app/kairanban/page.tsx（回覧板一覧ページ）

`kairanbanIssues` 配列の**先頭**に追加する。

```typescript
{
  id: {号数},
  issueNumber: "第○号",
  date: "2026年○月○日",
  itemCount: {items配列の総数},
  summary: "主な内容を読みやすく要約（〇〇・〇〇・〇〇 など）",
},
```

---

### 3. app/kairanban/[id]/page.tsx（静的生成パラメータ）

`generateStaticParams` に新しいIDを追加する。

```typescript
return [{ id: '1' }, ..., { id: '{号数}' }]
```

---

### 4. app/koho/[id]/page.tsx（広報データ追加 + 静的生成パラメータ）

`kohoData` オブジェクトの**先頭**に追加する。

```typescript
"{回数}": {
    issueNumber: "第○回",
    date: "2026年○月○日",
    items: [
        {
            title: "1. 広報すずか 2026.○.○ No.○○○",
            pdfUrl: "/koho/{回数}/1.広報すずか_2026.○.○_No.○○○.pdf",
            description: "内容の紹介文。",
        },
        // 以下、PDFファイル分繰り返し
    ],
},
```

同ファイルの `generateStaticParams` にも追加。

```typescript
return [{ id: '1' }, ..., { id: '{回数}' }]
```

---

### 5. app/koho/page.tsx（広報一覧ページ）

`kohoIssues` 配列の**先頭**に追加する。

```typescript
{
    id: {回数},
    issueNumber: "第○回",
    date: "2026年○月○日",
    itemCount: {items配列の総数},
    summary: "主な内容を読みやすく要約",
},
```

---

### 6. app/page.tsx（トップページお知らせ）

`updateHistory` 配列の**先頭**に追加し、**3件を超えたら古いものを末尾から削除**して常に3件に保つ。

```typescript
{
  date: "2026年○月○日",
  text: (
    <span>
      <Link href="/kairanban/{号数}" className="text-primary hover:underline">回覧板第○号</Link>・
      <Link href="/koho/{回数}" className="text-primary hover:underline">広報第○回</Link>を更新。
    </span>
  ),
},
```

---

### 7. app/news/page.tsx（お知らせページ）

`newsItems` 配列の**先頭**に追加する。idは既存の最大値+1。
回覧板・広報それぞれのリンクを含める。

```typescript
{
  id: {最大id+1},
  title: "回覧板第○号・広報第○回を更新。",
  date: "2026年○月○日",
  content: (
    <>
      <Link href="/kairanban/{号数}" className="text-primary hover:underline font-bold block mb-2">
        回覧板第○号はこちらからご覧いただけます
      </Link>
      <Link href="/koho/{回数}" className="text-primary hover:underline font-bold block">
        広報第○回はこちらからご覧いただけます
      </Link>
    </>
  ),
  important: false,
},
```

---

### 8. app/kairanban/archive/page.tsx（アーカイブPDFリンク更新）

PDF「原本を見る」ボタンのリンクを最新のアーカイブPDFファイル名に更新する。

```typescript
// 変更前
<a href="/kairanban/archive/2026○○○○令和8年度回覧板配布一覧.pdf" ...>

// 変更後（事前確認で確認した最新ファイル名に）
<a href="/kairanban/archive/2026○○○○令和8年度回覧板配布一覧.pdf" ...>
```

---

### 9. まとめPDF生成（回覧板のみ）

以下のコマンドを実行する。

```bash
cd my-app
node scripts/create_kairanban_pdf.js {号数}
```

成功すると `public/kairanban/{号数}/kairanban{号数}_all.pdf` が生成される。

#### スクリプトの動作仕様（`scripts/create_kairanban_pdf.js`）

| 処理 | 内容 |
|------|------|
| 対象ファイル | フォルダ内の `.pdf` ファイルを**ファイル名の数字順**（1→2→3…）で処理 |
| 非公開スキップ | ファイル名に `非公開` または `private` を含むファイルは**自動的に除外** |
| サイズ統一（第1パス） | 全ページを走査し、**最も小さいページ面積**を基準サイズとして決定 |
| サイズ統一（第2パス） | 全ページを基準サイズにリサイズ。縦横比を維持しつつ短辺・長辺それぞれを基準値に合わせる |
| 回転対応 | 90°/270°回転ページは幅・高さを入れ替えて正しくスケーリング |
| 出力 | `kairanban{号数}_all.pdf` として同フォルダに保存 |

**注意点：**
- フォルダ内に既存の `kairanban{号数}_all.pdf` や `all.pdf` があっても処理対象外（上書きして再生成される）
- 全PDFの中に著しく小さいページが1枚でもあると、そのサイズが基準になり他が縮小される。不自然に小さくなる場合はそのファイルを除外または修正する

---

### 10. 動作確認

```bash
cd my-app
npm run dev
```

`http://localhost:3000` で以下を確認：
- [ ] トップページのお知らせが3件・最新が先頭に表示される
- [ ] 回覧板一覧に新しい号が先頭に表示される
- [ ] 回覧板詳細ページ（`/kairanban/{号数}`）が開き、各PDFが閲覧できる
- [ ] 「まとめて閲覧する」ボタンで `kairanban{号数}_all.pdf` が開く
- [ ] アーカイブページ（`/kairanban/archive`）の原本PDFリンクが最新になっている
- [ ] 広報一覧に新しい回が先頭に表示される
- [ ] 広報詳細ページ（`/koho/{回数}`）が開き、各PDFが閲覧できる
- [ ] お知らせページ（`/news`）に記事が追加され、リンクが正しく動作する

---

### 11. デプロイ

`/deploy` ワークフローを実行する。

```powershell
cd my-app
npm run build
cd ..
if (Test-Path _next) { Remove-Item -Recurse -Force _next }
if (Test-Path out) { Remove-Item -Recurse -Force out }
Copy-Item -Path "my-app\out\*" -Destination "." -Recurse -Force
git add .
git commit -m "deploy: update kairanban{号数} and koho{回数}"
git push
```
