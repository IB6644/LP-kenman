# GitHub Pages デプロイ設定ガイド

## 📋 簡単3ステップでGitHub Pagesにデプロイ

### ステップ 1: GitHubリポジトリの設定を開く
1. ブラウザで以下のURLを開く：
   **https://github.com/IB6644/LP-kenman/settings/pages**

### ステップ 2: GitHub Pages を有効化
1. **Source（ソース）** セクションで：
   - **Source**: 「**GitHub Actions**」を選択

### ステップ 3: デプロイを実行
1. **https://github.com/IB6644/LP-kenman/actions** を開く
2. 「**Deploy to GitHub Pages**」ワークフローをクリック
3. 「**Run workflow**」ボタンをクリック
4. 「**Run workflow**」を再度クリックして実行

## 🌐 公開URL
デプロイが完了すると、以下のURLでアクセスできます：

### **https://IB6644.github.io/LP-kenman/**

## 📂 公開されるページ

- **メインページ**: https://IB6644.github.io/LP-kenman/
- **プレゼンテーション**: https://IB6644.github.io/LP-kenman/presentation.html
- **スライド（エクスポート用）**: https://IB6644.github.io/LP-kenman/slides-export.html

## ⚙️ 自動デプロイ
mainブランチにプッシュすると自動的にデプロイされます。

## 🔍 デプロイ状況の確認
1. **https://github.com/IB6644/LP-kenman/actions** でワークフローの実行状況を確認
2. 緑のチェックマークが表示されたらデプロイ完了
3. 1-2分待ってからURLにアクセス

## ❓ トラブルシューティング

### ページが表示されない場合
1. GitHub Pages設定を確認（上記ステップ1-2）
2. ワークフローが正常に実行されたか確認
3. 5分程度待ってから再度アクセス

### 404エラーの場合
- URLが正しいか確認：https://IB6644.github.io/LP-kenman/
- リポジトリ名が変更されていないか確認

## 📝 メモ
- GitHub Pagesは無料で利用可能
- HTTPS対応（SSL証明書自動設定）
- カスタムドメインも設定可能（オプション）