---
description: 広報（koho）ページに新しい回を追加・更新する際の手順
---

# 広報（koho）更新ワークフロー

ユーザーが `public/koho/{回数}/` フォルダにPDFをアップロードした後の処理手順。

## 手順

### 1. フォルダのPDF一覧を確認
```powershell
Get-ChildItem "d:\Github\yasuzuka-minami2\yasuzuka-minami2.github.io\my-app\public\koho\{回数}"
```

### 2. PDFの中身を読み取り（pdfplumber使用）
回覧板ワークフロー（`/kairanban-update`）と同じスクリプトを使用。パスを `koho` に変更。

- 抽出したテキストを元に紹介文を作成
- スキャン画像PDFの場合はファイル名から推測

### 3. コードの更新

#### 3-1. 詳細ページの更新
ファイル: `app/koho/[id]/page.tsx`

`kohoData` に新しい回のデータを追加:

```typescript
"{回数}": {
  issueNumber: "第○回",
  date: "2026年○月○日",
  items: [
    {
      title: "広報すずか 2026.○.○ No.○○○",
      pdfUrl: "/koho/{回数}/ファイル名.pdf",
      description: "PDFの内容から作成した紹介文",
    },
  ],
},
```

#### 3-2. 一覧ページの更新
ファイル: `app/koho/page.tsx`

`kohoIssues` 配列の先頭に新しい回を追加。

#### 3-3. generateStaticParamsの更新
ファイル: `app/koho/[id]/page.tsx`

新しいIDを追加。

### 4. デプロイ
`/deploy` ワークフローを実行。
