# 2026-07-05 更新作業ログ

対象サイト: 安塚町自治会 新田南2組 デジタル回覧板
作業日: 2026年7月5日
作業コミット: `068e41d deploy: update kairanban12 and koho10`
作業前復旧タグ: `backup-before-20260705-update`
対象ファイルバックアップ: `D:\tmp\yasuzuka-minami2-targeted-backup-20260705`

## 今回の更新内容

- 回覧板第12号を追加した。
- 広報第十回を追加した。
- 回覧板アーカイブの原本PDFリンクを 2026年7月5日版へ更新した。
- トップページのお知らせを3件に整理した。
  - 1件目: 祭礼用具虫干し延期の緊急連絡を赤字太字で維持。
  - 2件目: 回覧板第12号・広報第十回の更新案内を追加。
  - 3件目: 回覧板第11号更新を維持。
- ニュースページには履歴を残した。
  - 緊急連絡を `id: 11` に変更。
  - 今回更新を `id: 10` として追加。
- 回覧板第12号の一括閲覧PDF `kairanban12_all.pdf` を生成した。
- Next.js 16 でビルドエラーになるため、`next.config.ts` の古い `eslint.ignoreDuringBuilds` 設定を削除した。

## 変更した主なソース

- `my-app/lib/kairanban-data.ts`
  - `kairanbanData` の先頭に第12号を追加。
- `my-app/app/kairanban/page.tsx`
  - 回覧板一覧の先頭に第12号を追加。
- `my-app/app/kairanban/[id]/page.tsx`
  - `generateStaticParams()` に `{ id: '12' }` を追加。
- `my-app/app/kairanban/archive/page.tsx`
  - 原本PDFリンクを `/kairanban/archive/20260705令和8年度回覧板配布一覧.pdf` に更新。
- `my-app/app/koho/page.tsx`
  - 広報一覧の先頭に第十回を追加。
- `my-app/app/koho/[id]/page.tsx`
  - `generateStaticParams()` に `{ id: '10' }` を追加。
  - `kohoData` の先頭に第十回を追加。
- `my-app/app/page.tsx`
  - トップページのお知らせを3件に整理。
- `my-app/app/news/page.tsx`
  - ニュース履歴に今回更新を追加。
- `my-app/next.config.ts`
  - Next.js 16 非対応の `eslint` キーを削除。

## 追加した主な公開ファイル

- `my-app/public/kairanban/12/`
- `my-app/public/kairanban/12/kairanban12_all.pdf`
- `my-app/public/koho/10/`
- `my-app/public/kairanban/archive/20260705令和8年度回覧板配布一覧.pdf`
- ルート公開出力側の `kairanban/12.html`, `koho/10.html`, 各PDF, `_next/static/...`

## 次回の標準作業フロー

1. 作業前に状態確認する。

```powershell
git status --short
git log --oneline -3
```

2. 復旧点を作る。

```powershell
git tag backup-before-YYYYMMDD-update
```

必要なら、未追跡PDFや編集対象ファイルを `D:\tmp` にコピーしておく。

3. PDFなどの素材を `my-app/public/...` に配置する。

- 回覧板: `my-app/public/kairanban/[号数]/`
- 広報: `my-app/public/koho/[回数]/`
- 回覧板配布一覧PDF: `my-app/public/kairanban/archive/`

4. ソースを更新する。

- 回覧板は `my-app/lib/kairanban-data.ts` が詳細データの本体。
- 回覧板一覧は `my-app/app/kairanban/page.tsx`。
- 回覧板詳細の静的生成対象は `my-app/app/kairanban/[id]/page.tsx` の `generateStaticParams()`。
- 広報は `my-app/app/koho/page.tsx` と `my-app/app/koho/[id]/page.tsx` に直書き。
- トップお知らせは `my-app/app/page.tsx`。
- ニュース履歴は `my-app/app/news/page.tsx`。
- アーカイブPDFリンクは `my-app/app/kairanban/archive/page.tsx`。

5. 回覧板の一括PDFを生成する。

```powershell
cd my-app
node scripts/create_kairanban_pdf.js [号数]
```

例:

```powershell
node scripts/create_kairanban_pdf.js 12
```

6. ビルドする。

```powershell
npm run build
```

7. 静的出力を公開ルートへコピーする。

```powershell
Copy-Item -Path .\out\* -Destination ..\ -Recurse -Force
```

8. 主要ファイルを確認する。

```powershell
Test-Path ..\kairanban\[号数].html
Test-Path ..\koho\[回数].html
Test-Path ..\kairanban\[号数]\kairanban[号数]_all.pdf
```

9. 必要なら開発サーバーで目視確認する。

```powershell
npm run dev -- -p 3000
```

確認URL:

- `http://127.0.0.1:3000/`
- `http://127.0.0.1:3000/kairanban/[号数]`
- `http://127.0.0.1:3000/koho/[回数]`
- `http://127.0.0.1:3000/kairanban/archive`
- `http://127.0.0.1:3000/news`

10. コミットして push する。

```powershell
git add .
git commit -m "deploy: update kairanbanXX and kohoYY"
git push
```

## 次回チェックリスト

- トップページの緊急連絡の優先順位を維持する。
- トップページのお知らせ件数を必要に応じて調整する。
- ニュースページには履歴を消さずに残す。
- `generateStaticParams()` への追加を忘れない。
- 回覧板アーカイブのPDFリンクを最新PDFへ更新する。
- `kairanbanXX_all.pdf` が生成されているか確認する。
- `npm run build` が成功していることを確認する。
- `my-app/out` をルートへコピーしてからコミットする。
- `git status --short` がコミット後にクリーンであることを確認する。

## 今回の検証結果

- `node scripts/create_kairanban_pdf.js 12`: 成功。
- `npm run build`: 成功。
- `Copy-Item -Path .\out\* -Destination ..\ -Recurse -Force`: 成功。
- `kairanban/12.html`: 存在確認済み。
- `koho/10.html`: 存在確認済み。
- `kairanban/12/kairanban12_all.pdf`: 存在確認済み。
- `kairanban/archive/20260705令和8年度回覧板配布一覧.pdf`: 存在確認済み。
- `git push`: 成功。

## 注意点

- このリポジトリはルート直下が GitHub Pages 公開物、`my-app` が Next.js 元アプリ。
- `npm run build` 後は `my-app/out` をルートへコピーしないと GitHub Pages には反映されない。
- Next.js のビルドで `_next/static/[build id]/` が新しく作られるため、公開ルート側の差分は多くなる。
- Windows 環境では Git の改行警告が多数出ることがあるが、今回のコミットと push は問題なく完了した。