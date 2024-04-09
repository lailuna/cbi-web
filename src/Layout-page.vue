<template>
  <div id="app">
    <!-- topmenu -->
    <div class="fixed-top topMenu">
      <b-container fluid>
        <b-navbar toggleable="lg">
          <b-navbar-brand>
            <router-link to="/indexView">
              <b-img
                class="logo_img"
                :src="require('./assets/cbi_logo.png')"
                fluid
                alt="Responsive image"
              ></b-img>
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="topMenu_item ml-auto">
              <b-nav-item><router-link to="/indexView">首頁</router-link></b-nav-item>
              <b-nav-item
                ><router-link to="/cbiNewsView">最新消息</router-link></b-nav-item
              >
              <b-nav-item
                ><router-link to="/companyView">公司簡介</router-link></b-nav-item
              >
              <b-nav-item
                ><router-link to="/serviceView">服務簡介</router-link></b-nav-item
              >
              <b-nav-item><router-link to="/case_gov">實績案例</router-link></b-nav-item>
              <b-nav-item
                ><router-link to="/recruitView">人才招募</router-link></b-nav-item
              >
              <b-nav-item
                ><router-link to="/contactView">聯絡我們</router-link></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
    <div><router-view></router-view></div>
    <!-- footer -->
    <div class="footer_section">
      <b-container>
        <b-row>
          <b-col lg="6" class="aboutUs">
            <p>關於我們</p>
            <p>
              研發團隊源自於各方技術好手：以我們多年來在客製化系統開發、公私有雲應用、跨平台整合與資訊軟體設計的開發經驗，致力於提供客戶在特定市場與應用的最佳解決方案…
            </p>
          </b-col>
          <!-- <b-col lg="4" class="weblink text-center">
            <ul class="footer_link">
              <li class="footer_linkItem">
                <router-link to="/indexView">首頁</router-link>
              </li>
              <li class="footer_linkItem">
                <router-link to="/companyView">公司簡介</router-link>
              </li>
              <li class="footer_linkItem">
                <router-link to="/serviceView">服務簡介</router-link>
              </li>
              <li class="footer_linkItem">
                <router-link to="/recruitView">人才招募</router-link>
              </li>
              <li class="footer_linkItem">
                <router-link to="/contactView">聯絡我們</router-link>
              </li>
            </ul>
          </b-col> -->
          <b-col lg="6" class="d-flex justify-content-center">
            <ul class="cbi_data">
              <li class="cbi_dataItem fs_18">雲湧資訊股份有限公司</li>
              <li class="cbi_dataItem fs_18">Cloud-Bridging Information Inc.</li>
              <li class="cbi_dataItem">
                <b-img
                  src="../src/assets/icon_home.png"
                  fluid
                  alt="Responsive image"
                ></b-img
                >：新北市汐止區新台五路一段 97 號 19F 之 7
              </li>
              <li class="cbi_dataItem">
                <b-img
                  src="../src/assets/icon_phone.png"
                  fluid
                  alt="Responsive image"
                ></b-img
                >：<a href="tel:+886-2-26971971">(02) 2697-1971 </a>
              </li>
              <li class="cbi_dataItem">
                <b-img
                  src="../src/assets/icon_fax.png"
                  fluid
                  alt="Responsive image"
                ></b-img
                >：(02) 2697-1991
              </li>
              <li class="cbi_dataItem">
                <b-img
                  src="../src/assets/icon_mail.png"
                  fluid
                  alt="Responsive image"
                ></b-img
                >：<a href="mailto:admin@cloud-bridging.com">admin@cloud-bridging.com</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #0f172a;
}

ul {
  list-style: none;
  padding: 0;
}

.logo_img {
  max-height: 45px;
}

.topMenu {
  width: 100%;
  background: #fff;
  opacity: 0.95;
}

.topMenu_item {
  color: #000;
  font-weight: bold;
}

.navbar {
  padding: 12px;
}

.nav-item {
  padding: 10px;
}

.navbar-toggler {
  border: 0;
}

.navbar-toggler-icon {
  background-size: 40px;
}

.nav-link {
  padding: 0;
}

.nav-link a {
  color: #0f172a;
  text-decoration: none;
}

/* footer */
.footer_section {
  background-color: #334155;
  color: #fff;
  padding: 80px;
  margin-top: -1px;
}

.footer_section .aboutUs {
  font-size: 18px;
}

.footer_section .weblink {
  font-size: 16px;
}

.footer_section .cbi_data {
  font-size: 14px;
}

.footer_section .cbi_data .cbi_dataItem {
  margin: 5px 0;
  color: #fff;
}

.footer_section .cbi_data .cbi_dataItem a {
  color: #fff;
}

.footer_section .cbi_data .fs_18 {
  font-size: 18px;
}

.footer_section .footer_link .footer_linkItem {
  margin: 8px 0;
}

.footer_section .footer_link .footer_linkItem a {
  color: #fff;
}

@media (max-width: 992px) {
  /* footer_mobile */
  .footerBg {
    background-position: left;
    min-height: 180px;
  }

  .footer_section {
    padding: 30px;
  }

  .aboutUs,
  .weblink {
    display: none;
  }
}
</style>
