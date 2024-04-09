<template>
  <div>
    <div class="topBanner_pc">
      <b-img src="../assets/serviceBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img
        src="../assets/serviceBanner_mobile.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <!-- 工作管理團隊 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="service_content">
            <div class="section_title"><span class="title_style">工作管理團隊</span></div>
            <p>
              為確保各專案的工作計劃皆能順利執行，每個專案均安排由主管帶領相關成員：由專案經理作為主要連繫與溝通的窗口，藉由需求訪談確實理解機關需求並縮短磨合期，由資深工程師指導其他設計成員迅速掌握系統架構及流程以加速各階段開發時程。
              除管理層外，公司組織主要區分為「專案及後勤管理」、「研發設計」、「商務行銷」以及「品保測試小組」等。
            </p>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 服務項目 -->
    <section>
      <div class="content_section bg_gray">
        <b-row class="service_item no-gutters">
          <b-col md="6">
            <b-img
              src="../assets/service01.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">AI 物聯網系統整合設計與開發</span>
                </div>
                <ul>
                  <li>從雲端架構規劃設計到應用服務的開發</li>
                  <li>整合雲端, 聯網裝置及跨平台App的客製化服務</li>
                  <li>事件觸發與裝置連動流程設計</li>
                  <li>人工智慧 (AI) / 機器學習 (ML)</li>
                  <li>區塊鏈技術應用 (FinTech, NFT, 智能合約, etc.)</li>
                </ul>
                <!-- <a href=""
                  ><b-img
                    src="../assets/icon-right.png"
                    fluid
                    alt="Responsive image"
                  ></b-img
                ></a> -->
              </b-container>
            </div>
          </b-col>
        </b-row>
        <b-row class="service_item no-gutters flex_column_reverse">
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">Mobile APP 設計與開發</span>
                </div>
                <ul>
                  <li>介面設計、功能制訂與流程規劃 (UI/UxD)</li>
                  <li>第三方服務的整合與串接 (Web Service)</li>
                  <li>即時通訊應用 (Instant Messaging)</li>
                </ul>
                <!-- <a href=""
                  ><b-img
                    src="../assets/icon-right.png"
                    fluid
                    alt="Responsive image"
                  ></b-img
                ></a> -->
              </b-container>
            </div>
          </b-col>
          <b-col md="6">
            <b-img
              src="../assets/service02.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="service_item no-gutters">
          <b-col md="6">
            <b-img
              src="../assets/service03.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">客製化資訊系統開發與維護</span>
                </div>
                <ul>
                  <li>雲端系統：front-end / back-end & DB</li>
                  <li>行動App：Android & iOS</li>
                  <li>聯網裝置：Device firmware API (OTA)</li>
                </ul>
                <!-- <router-link to="/service_applicationSystem">
                  <b-img src="../assets/icon-right.png" fluid alt="Responsive image"></b-img>
                </router-link> -->
              </b-container>
            </div>
          </b-col>
        </b-row>
        <b-row class="service_item no-gutters flex_column_reverse">
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">Web ERP / CMS 系統設計與開發</span>
                </div>
                <ul>
                  <li>系統客製化服務 (Workflow & Framework)</li>
                  <li>模組化設計：彈性配置以因應不同行業之需求 (Modularization)</li>
                </ul>
                <!-- <a href=""
                  ><b-img
                    src="../assets/icon-right.png"
                    fluid
                    alt="Responsive image"
                  ></b-img
                ></a> -->
              </b-container>
            </div>
          </b-col>
          <b-col md="6">
            <b-img
              src="../assets/service04.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="service_item no-gutters">
          <b-col md="6">
            <b-img
              src="../assets/service05.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">資料庫設計與優化</span>
                </div>
                <ul>
                  <li>評估 規劃 建置 維護 升級</li>
                  <li>異質資料移轉與整合 (Data Migration & Integration)</li>
                  <li>異地備份、災難備援</li>
                  <li>效能調校與資安檢視</li>
                </ul>
                <!-- <a href=""
                  ><b-img
                    src="../assets/icon-right.png"
                    fluid
                    alt="Responsive image"
                  ></b-img
                ></a> -->
              </b-container>
            </div>
          </b-col>
        </b-row>
        <b-row class="service_item no-gutters flex_column_reverse">
          <b-col md="6">
            <div class="service_content">
              <b-container>
                <div class="title">
                  <span class="title_style">資安修復與諮詢</span>
                </div>
                <ul>
                  <li>弱點掃描</li>
                  <li>原始碼掃描</li>
                  <li>滲透測試</li>
                  <li>網站監控 (ex. 防網頁竄改)</li>
                  <li>資安諮詢</li>
                </ul>
                <!-- <a href=""
                  ><b-img
                    src="../assets/icon-right.png"
                    fluid
                    alt="Responsive image"
                  ></b-img
                ></a> -->
              </b-container>
            </div>
          </b-col>
          <b-col md="6">
            <b-img
              src="../assets/service06.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- 專案開發流程 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="section_title"><span class="title_style">專案開發流程</span></div>
          <div class="flow_pc">
            <b-img
              src="../assets/flow_pc.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
          <div class="flow_mobile">
            <b-img
              src="../assets/flow_mobile.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 我們的客戶 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="section_title"><span class="title_style">我們的客戶</span></div>
          <b-row>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_tpmetro.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_ntmetro.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_tcmetro.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_tymetro.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_taipower.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img src="../assets/client_AFRC.png" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img
                src="../assets/client_INDSR.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-col>
            <b-col cols="6" md="3" class="client_item">
              <b-img src="../assets/client_ner.png" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style>
.section_title {
  text-align: center;
  margin-bottom: 25px;
}

.service_content {
  padding: 50px 100px;
}

.service_content .title {
  text-align: left;
}

/* 服務項目 */
.service_item {
  align-items: center;
}

@media (max-width: 767px) {
  .section_title {
    font-size: 20px;
    margin-top: 30px;
    text-align: left;
  }

  .service_content {
    padding: 30px 0;
  }

  .flex_column_reverse {
    flex-direction: column-reverse;
  }
}

/* 專案開發流程 */
.flow_mobile {
  display: none;
}

@media (max-width: 767px) {
  .flow_pc {
    display: none;
  }

  .flow_mobile {
    display: block;
  }
}

/* 我們的客戶 */
.client_item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  margin-bottom: 20px;
}

.client_item a {
  padding: 24px;
}

/* .client_item:hover {
  border: 1px solid #cbd5e1;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
} */
</style>
