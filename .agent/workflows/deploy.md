---
description: Next.jsアプリのビルドとGitHub Pagesへのデプロイ
---

# デプロイ手順

このワークフローは、Tailwind CSSを含むNext.jsアプリを正しくビルドし、GitHub Pages用に配置してデプロイします。
`.nojekyll` ファイルの生成も自動化されています。

## 手順

1. `my-app` ディレクトリへ移動
2. アプリケーションをビルド（`.nojekyll`も自動生成されます）
3. プロジェクトルートへ戻る
4. 古い `_next` ディレクトリと `out` ディレクトリを削除（クリーンアップ）
5. ビルド成果物（`my-app/out`）をルートへコピー
6. Gitへコミットしてプッシュ

```powershell
# 1. & 2. ビルド
cd my-app
npm run build

# 3. ルートへ
cd ..

# 4. クリーンアップ (Powershell)
if (Test-Path _next) { Remove-Item -Recurse -Force _next }
if (Test-Path out) { Remove-Item -Recurse -Force out }

# 5. コピー
Copy-Item -Path "my-app\out\*" -Destination "." -Recurse -Force

# 6. プッシュ
git add .
git commit -m "deploy: update site"
git push
```
