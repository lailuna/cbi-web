<template>
  <div>
    <div class="footerBg">
      <!-- <b-img
        src="../img/footerBg.png"
        fluid
        alt="Responsive image"
      ></b-img> -->
    </div>
    <div class="footer_section">
      <b-container>
        <b-row>
          <b-col lg="4" class="aboutUs">
            <p>關於我們</p>
            <p>
              雲湧資訊成立于2016年：時間不長、人數不多、但熱情洋溢 !<br />
              研發團隊源自於各方技術好手：以我們多年在數位儲存應用、跨平台整合與軟硬體設計的開發經驗，致力於提供客戶在特定市場與應用
              MMI + API = M2M 的最佳解決方案…
            </p>
          </b-col>
          <!-- <b-col lg="4" class="weblink text-center">
            <ul class="footer_link">
              <li class="footer_linkItem"><a href="#">首頁</a></li>
              <li class="footer_linkItem"><a href="#">公司簡介</a></li>
              <li class="footer_linkItem"><a href="#">服務簡介</a></li>
              <li class="footer_linkItem"><a href="#">人才招募</a></li>
              <li class="footer_linkItem"><a href="#">聯絡我們</a></li>
            </ul>
          </b-col> -->
          <b-col lg="4">
            <ul class="cbi_data">
              <li class="cbi_dataItem fs_18">雲湧資訊股份有限公司</li>
              <li class="cbi_dataItem fs_18">Cloud-Bridging Information Inc.</li>
              <li class="cbi_dataItem">新北市汐止區新台五路一段 97 號 19F 之 7</li>
              <li class="cbi_dataItem">TEL：(02) 2697-1971</li>
              <li class="cbi_dataItem">FAX：(02) 2697-1991E-</li>
              <li class="cbi_dataItem">MAIL：admin@cloud-bridging.com</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
/* footer */

.footerBg {
  background-image: url(../img/footerBg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  margin-bottom: -1px;
}

.footer_section {
  background-color: #334155;
  color: #fff;
  padding: 100px;
}

.footer_section .aboutUs {
  font-size: 14px;
}

.footer_link .footer_linkItem {
  margin: 8px 0;
  font-size: 16px;
}

.cbi_data .fs_18 {
  font-size: 18px;
}

.cbi_data .cbi_dataItem {
  margin: 5px 0;
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
