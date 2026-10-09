# ATLAS / STYLE｜國際時尚與藝術靈感誌

這是一個以時尚為主、以藝術為靈感的國際風格誌前端專案。網站以純 HTML、CSS、JavaScript 建立，不需要資料庫，適合直接放入 GitHub 並使用 GitHub Pages 部署。

## 本次更新

- 新增「藝廊展覽／策展專欄」區塊
- 展覽分類篩選：All、Painting、Fashion、Space
- 點擊展覽卡片開啟策展內容 dialog
- 新增繁體中文、英文、韓文切換
- 語系偏好會保存在瀏覽器 localStorage
- 視覺改為雪白、珍珠灰、霧銀與低彩度灰綠的簡約白色系列
- 加入細點紙張紋理、展覽式幾何色塊與更克制的字體配色
- 手機版選單與藝廊卡片響應式支援

## 本機預覽

```bash
npm run dev
```

開啟 `http://localhost:4173`。

## 建置靜態輸出

```bash
npm run build
npm run preview
```

建置輸出會放在 `dist/`。GitHub Pages 自動部署工作流位於 `.github/workflows/deploy-pages.yml`。

## 文件

- [GitHub、Custom Domain 與 SSL 教學](GITHUB-DEPLOYMENT.md)
- [完整頁面架構、藝廊策展與多語系規劃](SITE-ARCHITECTURE.md)
- [內容與圖片授權提示](CONTENT-LICENSE-NOTE.md)

## 內容與視覺修改

- 修改文字與圖片引用：`index.html`
- 修改語言翻譯字典與互動：`script.js`
- 修改顏色、字體與響應式版面：`styles.css`
- 替換圖片：`assets/`

目前預覽專案沒有自動連接 GitHub、沒有替你推送，也沒有發布到正式網域。
