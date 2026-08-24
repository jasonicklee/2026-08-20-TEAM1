# 2026-08-20-TEAM1
2026-產業尖兵
# 島嶼旅跡 — 切版規範

共同開發，動工前請先讀完這份。

---

## 一、資料夾結構

```
/
├── _template.html      ★ 空白模板（新增頁面時複製這份）
├── index.html          ← 07
├── about.html          ← 07
├── products.html       ← 瑄
├── products-details    ← 瑄
├──...（其餘 5 頁，自行加入）
├── css/
│   ├── reset.css       ★ 共用，清掉瀏覽器預設
│   ├── variables.css   ★ 共用，色票字級間距
│   ├── common.css      ★ 共用，header/footer/按鈕
│   └── pages/
│       ├── index.css   ← 07
│       ├── about.css   ← 07
│       └── ...自行加入
├── js/                 （目前為空，之後放 hot-list.js）
├── images/
└── README.md
```

★ 標記的是共用檔案。**要改共用檔案，先在群組講一聲。**

---

## 二、CSS 載入順序（不能換）

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/pages/你的頁面.css">
```

後面載入的會蓋過前面的。頁面 CSS 放最後，才有辦法微調共用元件。

---

## 三、命名規範

用 BEM 命名法：`區塊__元素--修飾` 

```
.exp-card              區塊
.exp-card__title       區塊裡的元素（兩個底線）
.btn--primary          修飾狀態（兩個減號）
.is-open               狀態類（JS 控制的用 is- 開頭）
```

**分工防撞規則**：每頁的 CSS 檔案只能寫「自己頁面區塊名稱」開頭的 class。

| 頁面 | 允許的區塊前綴 |
|---|---|
| index.css | `.hero` `.stats` `.themes` `.theme-` `.hot` `.exp-` `.fav-` `.guide-cta` `.reviews` `.review-` |
| about.css | `.page-hero` `.story` `.values` `.value-` `.team` `.team-` `.numbers` |

共用元件（`.btn` `.container` `.section` `.eyebrow` `.tag` `.stars` `.stat` `.avatar` `.site-header` `.site-footer` `.site-nav` `.logo`）一律寫在 common.css。

---

## 四、RWD 斷點

手機優先寫法（先寫手機，再往上加）：

```css
.exp-grid { grid-template-columns: repeat(2, 1fr); }        /* 手機 + 平板 */
@media (min-width: 1024px) {                                 /* 桌機才換 */
  .exp-grid { grid-template-columns: repeat(4, 1fr); }
}
```

| 斷點 | 寬度 | 對應 |
|---|---|---|
| （預設） | < 768px | 手機 |
| md | ≥ 768px | 平板 |
| lg | ≥ 1024px | 桌機 |

⚠️ **CSS 變數不能用在 media query 裡**，斷點直接寫數字：

```css
@media (min-width: 768px)            /* ✅ */
@media (min-width: var(--bp-md))     /* ❌ 不會生效 */
```

---

## 五、各區塊欄數對照

| 區塊 | 手機 | 平板 | 桌機 |
|---|---|---|---|
| header nav | 漢堡 | 漢堡 | 展開 |
| 搜尋列 | 直向堆疊 | 橫向膠囊 | 橫向膠囊 |
| 數據列 | 4 | 4 | 4 |
| 體驗類型 | 4 | 4 | 8 |
| 體驗卡 | 2 | 2 | 4 |
| 品牌故事 | 堆疊 | 堆疊 | 左圖右文 |
| 三個承諾 | 1 | 1 | 3 |
| 團隊 | 2 | 2 | 4 |
| 評價卡 | 1 | 1 | 3 |
| By the Numbers | 2 | 2 | 4 |
| footer | 1 | 3 | 4 |

---

## 六、避免 CSS 打架的兩條鐵則

**1. padding 只寫一次**

`.section` 負責上下留白，頁面 CSS 只加背景色：

```css
/* common.css */
.section { padding-block: var(--s-section); }

/* index.css — 只加背景，不要再寫 padding */
.hot { background: var(--c-cream); }
```

有自己 padding 的區塊（`.hero` `.stats` `.guide-cta` `.page-hero` `.numbers`）就**不要掛 `.section` class**。

**2. 要蓋過共用樣式，用「加一層」而不是 `!important`**

```css
.numbers .stat__num { color: #fff; }   /* ✅ 兩個 class，權重比較高 */
.stat__num { color: #fff !important; } /* ❌ 後面就沒人蓋得掉了 */
```

---

## 六之二、與原站的已知差異

刻意保留 / 刻意修改的地方，避免被誤判為漏做：

| 項目 | 原站行為 | 本專案 | 原因 |
|---|---|---|---|
| 導覽列（<1024px） | 完全隱藏，無替代入口 | **維持一致，同樣隱藏** | 保持與原站還原度；此時 logo 為唯一導覽出口 |
| logo 連結 | 指向當前頁 | 一律指向 `index.html` | 手機版無導覽列，logo 需擔任回首頁的逃生出口 |
| 團隊卡片簡介 | 僅 hover 展開，觸控裝置永遠看不到 | 觸控裝置直接顯示 | `@media (hover: none)` 判斷輸入裝置，避免內容在手機上失效 |

⚠️ 導覽列這項是**依照原網站決定**。若日後要補漢堡選單，必須十頁同步修改——只改部分頁面會造成「首頁有選單、內頁沒有」的更嚴重問題。

---

## 七、Git 流程

```bash
git checkout -b feat/index-about      # 開自己的分支
# ...改檔案...
git add .
git commit -m "feat: 完成 index 首頁切版"
git push origin feat/index-about
# 到 GitHub 開 Pull Request，同學看過再合併
```

不要兩人同時直接推 main。動到 ★ 共用檔案前先講。

---

## 八、待辦

- [ ] 圖片換掉：目前 `images/` 是空的，index 用 picsum 佔位圖，換成正式圖後改 `src` 並補 `alt`
- [ ] 色票確認：現在是從截圖取樣的近似值，用取色器對一次原站
- [ ] 首頁體驗卡改 JS 動態產生（結構已預留，見 index.html 註解）
- [ ] 其他 8 頁的區塊前綴登記到上面表格

---

## 九、之後改成 JS 動態產生體驗卡

`index.html` 的 `#hotGrid` 已經預留掛載點。做法：

1. 清空 `#hotGrid` 裡的 8 個 `<article>`
2. 新增 `js/hot-list.js`，把資料寫成陣列
3. 用同樣的 class 結構印出來

每張卡的欄位對應：

```js
{
  category: "戶外冒險",   // .tag
  title:    "清水斷崖獨木舟探險",  // .exp-card__title
  city:     "花蓮",       // .exp-card__meta
  duration: "半天",       // .exp-card__meta
  price:    1800,         // .exp-card__price
  rating:   4.5,          // .stars
  reviews:  312,          // .exp-card__count
  image:    "images/exp-01.jpg"
}
```

CSS 完全不用改。