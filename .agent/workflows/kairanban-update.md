---
description: 回覧板の新しい号を追加・更新する際の手順
---

# 回覧板（kairanban）更新ワークフロー

毎月2回程度発行される回覧板をデジタル化し、Webサイトに掲載する手順です。

## 前提条件
- リポジトリのルート: `yasuzuka-minami2.github.io`
- 作業ディレクトリ: `my-app` (`cd my-app`)
- PDFファイルは番号付きで整理されていること（例: `1.お知らせ.pdf`, `2.行事予定.pdf`）

---

## 手順

### 1. PDFファイルの配置
1. `public/kairanban/{号数}` フォルダを作成する（例: `public/kairanban/4`）。
2. そのフォルダに回覧板のPDFファイルをすべて格納する。
3. ファイル名のルール:
   - 先頭に番号をつける（`1.`, `2.`...）
   - 非公開ファイルは名前に「非公開」または「private」を含める（例: `2.名簿(非公開).pdf`）。

### 2. コンテンツの把握
PDFの並び順と内容を確認し、以下の情報をメモしておく（データ入力に使用）。
- 発行日
- 各ファイルの内容（タイトル、簡単な要約）
- 非公開ファイルの有無

### 3. コードの更新

#### 3-1. データファイルの更新
**ファイル**: `lib/kairanban-data.ts`

`kairanbanData` オブジェクトに新しい号のキーを追加し、データを入力する。

```typescript
// 例: 第4号の場合
"4": {
    issueNumber: "第四号",
    date: "2026年2月15日",
    items: [
        {
            title: "1. ○○○",
            pdfUrl: "/kairanban/4/1.○○○.pdf",
            description: "○○に関するお知らせ。",
            isPrivate: false,
        },
        // 非公開ファイルの場合
        {
            title: "2.【非公開】名簿",
            pdfUrl: "", // 空文字にする
            description: "個人情報を含むため非公開。",
            isPrivate: true, // trueに設定
        },
    ],
    // 確認フォームURL（Google Form等）
    formUrl: "https://forms.gle/...",
},
```

#### 3-2. 回覧板一覧ページの更新
**ファイル**: `app/kairanban/page.tsx`

`kairanbanIssues` 配列の**先頭**に新しい号の概要を追加する。

```typescript
// 例
{
  id: 4,
  issueNumber: "第四号",
  date: "2026年2月15日",
  itemCount: 7, // アイテム総数
  summary: "主な内容の要約（組からのお知らせ、○○募集など）",
},
```

#### 3-3. 静的ページ生成設定の更新
**ファイル**: `app/kairanban/[id]/page.tsx`

`generateStaticParams` 関数に新しいIDを追加する。

```typescript
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }] // '4'を追加
}
```

### 4. ニュース・お知らせの更新

#### 4-1. トップページのお知らせ
**ファイル**: `app/page.tsx`

`updateHistory` 配列の**先頭**に更新履歴を追加する。

```typescript
const updateHistory = [
  { date: "2026年2月15日", text: "回覧板第四号を公開しました" }, // 追加
  ...
]
```

#### 4-2. お知らせページの更新
**ファイル**: `app/news/page.tsx`

`newsItems` 配列の**先頭**に新しい記事を追加する。個別ページへのリンクを含めること。
**注意**: 本文とタイトルの重複を避けるため、本文にはリンクのみ記述する等の工夫をすること。

```typescript
{
  id: {新しいID},
  title: "回覧板第四号を公開しました",
  date: "2026年2月15日",
  content: (
    <>
      <Link href="/kairanban/4" className="text-primary hover:underline font-bold">
        こちらからご覧いただけます（第四号へ移動）
      </Link>
    </>
  ),
  important: false,
},
```

### 5. 結合PDF（kairanban〇_all.pdf）の作成
PDFファイルを結合して、全資料一括閲覧用の `kairanban〇_all.pdf` を作成する。
以下のスクリプトを実行する（`pdf-lib` が必要）。

```powershell
# 初回のみインストールが必要
# npm install pdf-lib

# スクリプト実行
node scripts/create_kairanban_pdf.js {号数}
# 例: node scripts/create_kairanban_pdf.js 4
```

成功すると `public/kairanban/{号数}/kairanban{号数}_all.pdf` が作成される。

### 6. 検証
1. 開発サーバーを起動: `npm run dev`
2. ブラウザで `http://localhost:3000` を開く。
3. 以下の点を確認:
   - トップページのお知らせが更新されているか。
   - 回覧板一覧に新しい号が表示されているか。
   - 個別ページ（`/kairanban/{号数}`）が表示され、各PDFが開けるか。
   - 「まとめて閲覧する」ボタンで `kairanban〇_all.pdf` が開くか。
   - アーカイブページ（`/kairanban/archive`）に新しい号が追加されているか。
   - お知らせページ（`/news`）に記事が追加され、リンクが正しく機能するか。

### 7. デプロイ
確認ができたら、`/deploy` ワークフローの手順に従ってGitHub Pagesへデプロイする。
