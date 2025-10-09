# 📚 社内レビュー用デプロイガイド

## 🎯 クイックデプロイ方法（5分で完了）

### オプション1: Vercel（最速・推奨）

1. **Vercel CLIをインストール**
```bash
npm install -g vercel
```

2. **プロジェクトフォルダで実行**
```bash
vercel
```

3. **質問に答える**
- Setup and deploy? → Y
- Which scope? → （個人アカウント選択）
- Link to existing project? → N
- Project name? → osaki-meter-app
- Directory? → ./
- Override settings? → N

4. **完了！**
- Production URL: https://osaki-meter-app.vercel.app
- 永続的にアクセス可能

---

### オプション2: Netlify Drop（ドラッグ&ドロップ）

1. **Netlify Dropにアクセス**
   https://app.netlify.com/drop

2. **プロジェクトフォルダをドラッグ&ドロップ**
   osaki-meter-app-lpフォルダごとドロップ

3. **即座に公開完了**
   - URL例: https://amazing-einstein-123456.netlify.app
   - アカウント作成で永続化可能

---

### オプション3: GitHub Pages（バージョン管理付き）

1. **GitHubリポジトリ作成**
```bash
git remote add origin https://github.com/[あなたのユーザー名]/osaki-meter-app-lp.git
git branch -M main
git push -u origin main
```

2. **GitHub Pagesを有効化**
- リポジトリの Settings → Pages
- Source: Deploy from a branch
- Branch: main / root
- Save

3. **公開URL**
   https://[あなたのユーザー名].github.io/osaki-meter-app-lp/

---

## 📋 社内レビュー用チェックリスト

### PC表示確認
- [ ] Chrome
- [ ] Edge
- [ ] Safari
- [ ] Firefox

### モバイル表示確認
- [ ] iPhone（Safari）
- [ ] Android（Chrome）

### 機能確認
- [ ] ナビゲーションのスムーズスクロール
- [ ] デモiframe表示（検針アプリ）
- [ ] デモiframe表示（管理画面）
- [ ] ROI計算機の動作
- [ ] お問い合わせボタン

### コンテンツ確認
- [ ] テキストの誤字脱字
- [ ] 数値データの正確性
- [ ] リンクの動作
- [ ] 画像の表示

---

## 📝 フィードバック収集テンプレート

```markdown
## LP レビューフィードバック

**レビュー者**: [氏名]
**日付**: 2025/10/09
**デバイス**: [PC/スマホ] [OS/ブラウザ]

### 1. 全体的な印象（5段階評価）
- デザイン: ☆☆☆☆☆
- 内容の分かりやすさ: ☆☆☆☆☆
- 訴求力: ☆☆☆☆☆

### 2. 良い点
- 

### 3. 改善点
- 

### 4. 追加要望
- 

### 5. その他コメント
- 
```

---

## 🔒 セキュリティ注意事項

### 公開前の確認
- [ ] 機密情報が含まれていないか
- [ ] テストURLが本番URLに変更されているか
- [ ] 連絡先情報が正しいか

### 社内レビュー後
- [ ] フィードバックの反映
- [ ] 最終確認
- [ ] 本番環境へのデプロイ

---

## 💡 Tips

### レビュー期間中の更新
更新が必要な場合：
1. ローカルでファイルを編集
2. Vercelの場合: `vercel --prod` で再デプロイ
3. 自動的に同じURLで更新される

### アクセス制限が必要な場合
Vercelの環境変数でパスワード保護を設定可能：
1. Vercel Dashboard → Settings → Environment Variables
2. パスワード保護機能を有効化

---

## 📞 サポート

技術的な質問がある場合：
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://docs.github.com/pages