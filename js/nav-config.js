// nav-config.js - 統一管理 Header 與 Footer 設定
const siteConfig = {
  brand: {
    name: "島嶼旅跡",
    url: "index.html"
  },
  mainNav: [
    { name: "探索體驗", url: "explore.html" },
    { name: "關於我們", url: "about.html" },
    { name: "常見問題", url: "faq.html" },
    { name: "我的訂單", url: "orders.html" }
  ],
  authBtn: {
    name: "登入/註冊",
    url: "login.html"
  },
  footerSections: [
    {
      title: "探索",
      links: [
        { name: "所有體驗", url: "explore.html" },
        { name: "戶外冒險", url: "explore.html?cat=outdoor" },
        { name: "手作工藝", url: "explore.html?cat=craft" },
        { name: "美食料理", url: "explore.html?cat=food" },
        { name: "文化歷史", url: "explore.html?cat=culture" }
      ]
    },
    {
      title: "公司",
      links: [
        { name: "關於我們", url: "about.html" },
        { name: "常見問題", url: "faq.html" },
        { name: "旅遊嚮導招募", url: "recruit.html" },
        { name: "媒體合作", url: "press.html" }
      ]
    },
    {
      title: "支援",
      links: [
        { name: "退款政策", url: "refund.html" },
        { name: "隱私政策", url: "privacy.html" },
        { name: "服務條款", url: "terms.html" },
        { name: "查看訂單", url: "orders.html" }
      ]
    }
  ]
};

function renderLayout() {
  const mainHeader = document.getElementById("main-header");
  const footerContainer = document.getElementById("footer-container");

  // 渲染 Header
  if (mainHeader) {
    const navLinksHtml = siteConfig.mainNav
      .map(item => `<li><a href="${item.url}" class="nav-link">${item.name}</a></li>`)
      .join("");

    mainHeader.innerHTML = `
      <nav class="py-20">
        <div class="container">
          <div class="d-flex justify-between align-center">
            <h1 class="h4 align-center text-white">
              <a href="${siteConfig.brand.url}">${siteConfig.brand.name}<span class="ml-10 text-red">·</span></a>
            </h1>
            <div class="d-flex align-center nav-bar">
              <div class="mr-12">
                <div class="h6 text-white font-family-serif">
                  <ul class="d-flex g-12">
                    ${navLinksHtml}
                  </ul>
                </div>
              </div>
              <div class="font-family-serif nav-btn">
                <a href="${siteConfig.authBtn.url}" class="btn btn-orange">${siteConfig.authBtn.name}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // 渲染 Footer
  if (footerContainer) {
    const footerColumnsHtml = siteConfig.footerSections
      .map(section => {
        const linksHtml = section.links
          .map(link => `<li><a href="${link.url}">${link.name}</a></li>`)
          .join("");

        return `
          <div class="text-white">
            <h6 class="h6 mb-16">${section.title}</h6>
            <ul class="text-grey footer-nav">
              ${linksHtml}
            </ul>
          </div>
        `;
      })
      .join("");

    footerContainer.innerHTML = `
      <div class="container">
        <div class="footer-section">
          <div>
            <h4 class="h4 mb-10 text-white">
              ${siteConfig.brand.name}<span class="text-red">·</span>
            </h4>
            <div class="h6 text-grey">
              <p>深入台灣每一條小徑，</p>
              <p>遇見最在地的感動體驗。</p>
              <p>我們相信，旅行不只是到達目的地，</p>
              <p>而是與這片土地真實相遇。</p>
            </div>
          </div>

          <div class="footer-link font-family-serif">
            ${footerColumnsHtml}
          </div>
        </div>
        <div class="h6 text-grey border-top footer-text font-family-serif py-16">
          <div class="d-flex justify-between">
            <p>© 2025 島嶼旅跡 IslandTrace. All rights reserved.</p>
            <p>用心丈量台灣每一寸土地</p>
          </div>
        </div>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", renderLayout);
