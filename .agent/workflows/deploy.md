---
description: Next.jsアプリのビルドとGitHub Pagesへのデプロイ
---

# デプロイ手順

このワークフローは、Tailwind CSSを含むNext.jsアプリを正しくビルドし、GitHub Pages用に配置してデプロイします。
`.nojekyll` ファイルの生成も自動化されています。

> ⚠️ **重要:** コピー完了を待たずに `git add` を実行すると、フォントファイル等が取り残されて未コミットの変更が残る。
> コピー → git add → commit → push は必ず**直列（順番通り）**に実行すること。バックグラウンド実行は厳禁。

## 手順

1. `my-app` ディレクトリへ移動
2. アプリケーションをビルド（`.nojekyll`も自動生成されます）
3. プロジェクトルートへ戻る
4. 古い `_next` ディレクトリと `out` ディレクトリを削除（クリーンアップ）
5. ビルド成果物（`my-app/out`）をルートへコピー ← **完了を確認してから次へ**
6. Gitへコミットしてプッシュ

```bash
# 1. & 2. ビルド
cd my-app
npm run build

# 3. ルートへ
cd ..

# 4 & 5. クリーンアップ＆コピー（bash）
rm -rf _next out
cp -r my-app/out/. .

# 6. コピー完了後にまとめてコミット＆プッシュ
git add .
git commit -m "deploy: update site"
git push
```
