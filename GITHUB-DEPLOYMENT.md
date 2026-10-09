# ATLAS / STYLE｜GitHub 打包、推送、Custom Domain 與 SSL 教學

本教學對應目前的純 HTML、CSS、JavaScript 靜態網站。網站不需要資料庫即可使用 GitHub Pages 部署。

## 1. 推送與啟用 GitHub Pages

先在 GitHub 建立空白儲存庫，例如 `atlas-style`，再在專案根目錄執行：

```bash
git init
git branch -M main
git add .
git commit -m "Initial ATLAS STYLE website"
git remote add origin https://github.com/<你的帳號>/atlas-style.git
git push -u origin main
```

本專案已包含 `.github/workflows/deploy-pages.yml`。推送後：

1. 開啟儲存庫 **Settings**。
2. 進入 **Pages**。
3. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
4. 到 **Actions** 確認 `Deploy ATLAS / STYLE to GitHub Pages` 完成。
5. 從 workflow summary 的 `page_url` 開啟網站。

日常更新：

```bash
git add .
git commit -m "Update editorial content"
git push
```

不要把 GitHub Personal Access Token 寫入指令、文件或程式碼。GitHub Pages 網站會公開在網路上，發布前請移除 API key、密碼、私人照片和 `.env`。

## 2. 設定 Custom Domain

假設你想使用 `www.example.com` 或 `example.com`。

### A. 先在 GitHub Pages 輸入網域

1. 開啟 GitHub 儲存庫的 **Settings**。
2. 選擇 **Pages**。
3. 在 **Custom domain** 欄位輸入你要使用的完整網域，例如 `www.example.com`。
4. 按 **Save**。
5. 如果 GitHub 顯示需要驗證網域，先完成帳號／網域驗證，再繼續 DNS 設定。

先在 GitHub 加入網域，再設定 DNS，可以降低子網域被他人接管的風險。GitHub 也建議先驗證自訂網域。[1]

### B. 設定 DNS

#### 使用根網域 `example.com`

在你的網域註冊商或 DNS 服務商新增 `A` 記錄：

```text
主機名稱：@
類型：A
值：185.199.108.153
值：185.199.109.153
值：185.199.110.153
值：185.199.111.153
```

如果 DNS 服務商支援 `ALIAS` 或 `ANAME`，也可以把根網域指向你的 GitHub Pages 預設網域。GitHub 目前也列出 IPv6 的 `AAAA` 記錄；不確定時先依你的 DNS 服務商介面與 GitHub 官方文件設定。[1]

#### 使用 `www.example.com`

新增 `CNAME` 記錄：

```text
主機名稱：www
類型：CNAME
值：<你的帳號>.github.io
```

不要在 CNAME 值後面加上儲存庫名稱。若網站是專案頁面，GitHub Pages 會依 Pages 設定把 `www.example.com` 對應到該專案。

### C. 等待 DNS 傳播並檢查

DNS 變更可能需要最多 24 小時。可以在終端機檢查：

```bash
dig example.com +noall +answer -t A
dig www.example.com +noall +answer -t CNAME
```

也可以使用你的 DNS 服務商提供的查詢工具。確認結果指向 GitHub Pages 後，回到 **Settings → Pages** 查看 Custom domain 是否顯示成功。

不要同時留下與其他主機衝突的 A、AAAA、ALIAS、ANAME 或 CNAME 記錄；多餘記錄可能造成驗證或憑證建立失敗。[1]

## 3. 啟用 SSL／HTTPS

GitHub Pages 會為 `github.io` 網域提供 HTTPS。自訂網域需要等待 GitHub 完成憑證配置。

1. 先完成 Custom domain 與 DNS 設定。
2. 回到 **Settings → Pages**。
3. 等待網域旁出現可用的憑證狀態。
4. 勾選 **Enforce HTTPS**。
5. 用 `https://example.com` 和 `https://www.example.com` 測試，不要只測試 HTTP。

GitHub Pages 的 HTTPS 憑證通常會自動處理；如果剛設定完還沒有 **Enforce HTTPS**，可能需要等待憑證建立。不要自行把 HTTP 圖片、CSS 或 JavaScript 混入 HTTPS 網站，否則會造成 mixed content。[2]

GitHub 官方指出，HTTPS 強制重新導向可能需要一些時間才可使用；若自訂網域憑證一直未建立，先檢查 DNS 是否有多餘記錄，再重新儲存一次 Custom domain。[1] [2]

## 4. 本機測試與建置

```bash
npm run dev
npm run build
npm run preview
```

建置後確認 `dist/index.html`、`dist/styles.css`、`dist/script.js` 和 `dist/assets/` 存在。圖片使用相對路徑，因此可在 GitHub Pages 專案子路徑中工作。

## 5. 多語系功能

目前網站右上角提供繁體中文、英文、韓文切換。切換結果會寫入瀏覽器 `localStorage`，重新開啟同一個瀏覽器時會保留上次選擇。正式版若要強化 SEO，建議改成 `/zh-hant/`、`/en/`、`/ko/` 三組可分享網址，並加入 `hreflang`。

## 6. 參考資料

[1]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site "Managing a custom domain for your GitHub Pages site"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https "Securing your GitHub Pages site with HTTPS"
