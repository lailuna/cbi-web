<template>
  <div id="App">
    <div class="topBanner_pc">
      <b-img src="../assets/companyBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img
        src="../assets/companyBanner_mobile.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <!-- 關於雲湧 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="introduce_content text-center">
            <div class="section_title"><span class="title_style">關於雲湧</span></div>
            <p class="introduce_text">
              研發團隊源自於各方技術好手：以我們多年來在客製化系統開發、公私有雲應用、跨平台整合與資訊軟體設計的開發經驗，致力於提供客戶在特定市場與應用的最佳解決方案…
            </p>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 經營理念 -->
    <section>
      <div class="content_section bg_gray">
        <b-row class="align-items-center no-gutters">
          <b-col md="6"
            ><b-img
              src="../assets/business.png"
              class="w-100"
              fluid
              alt="Responsive image"
            ></b-img
          ></b-col>
          <b-col md="6">
            <div class="introduce_content p-md-5">
              <b-container>
                <div class="title"><span class="title_style">經營理念</span></div>
                <p class="introduce_text">
                  用服務打造產品，用務實探索創新，用互惠共創商機
                </p>
                <p class="introduce_text">「使命必達」是本公司對客戶的承諾</p>
              </b-container>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- 相關認證 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="introduce_content">
            <div class="section_title"><span class="title_style">相關認證</span></div>
            <!-- pc -->
            <div class="certificate_pc">
              <b-container fluid>
                <b-row>
                  <b-col lg="4" class="certificate_item">
                    <div class="certificate_img">
                      <b-img
                        src="../assets/certificate_PMP.png"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                    </div>
                    <div class="certificate_title">專案管理</div>
                    <p class="certificate_text">國際PMP專業證書</p>
                  </b-col>
                  <b-col lg="4" class="certificate_item">
                    <div class="certificate_img">
                      <b-img
                        src="../assets/certificate_CompTIA.jpg"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                    </div>
                    <div class="certificate_title">資訊安全</div>
                    <p class="certificate_text">Microsoft Certified Professional</p>
                  </b-col>
                  <b-col lg="4" class="certificate_item">
                    <div class="certificate_img">
                      <b-img
                        src="../assets/certificate_DB.png"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                    </div>
                    <div class="certificate_title">資料庫</div>
                    <p class="certificate_text">
                      Microsoft Certified Solutions Associate (SQL server)
                    </p>
                  </b-col>
                  <b-col lg="4" class="certificate_item">
                    <b-img src="../assets/ISO.png" fluid alt="Responsive image"></b-img>
                    <div class="certificate_title">資訊安全</div>
                    <p class="certificate_text">ISO27001:2013</p>
                  </b-col>
                  <b-col lg="4" class="certificate_item">
                    <b-img src="../assets/ISO_2.png" fluid alt="Responsive image"></b-img>
                    <div class="certificate_title">資訊安全</div>
                    <p class="certificate_text">
                      ISO27001:2013資訊安全管理系統主導稽核員
                    </p>
                  </b-col>
                  <b-col lg="4" class="certificate_item">
                    <b-img
                      src="../assets/certificate_C.jpg"
                      fluid
                      alt="Responsive image"
                    ></b-img>
                    <div class="certificate_title">應用程式</div>
                    <p class="certificate_text">資策會C#工程師就業養成班</p>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <!-- mobile -->
            <div class="certificate_mobile">
              <b-carousel
                class="certificate_carousel"
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#FFF"
                img-width="1024"
                img-height="450"
                style="text-shadow: 1px 1px 2px #333"
              >
                <b-carousel-slide img-src="../assets/certificate_PMP.png">
                  <div class="certificate_title">專案管理</div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/certificate_CompTIA.jpg">
                  <div class="certificate_title">資訊安全</div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/certificate_DB.png">
                  <div class="certificate_title">資料庫</div>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="certificate_mobile">
              <b-carousel
                class="certificate_carousel"
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#FFF"
                img-width="1024"
                img-height="450"
                style="text-shadow: 1px 1px 2px #333"
              >
                <b-carousel-slide img-src="../assets/ISO.png">
                  <div class="certificate_title">資訊安全</div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/ISO_2.png">
                  <div class="certificate_title">資訊安全</div>
                </b-carousel-slide>
                <b-carousel-slide img-src="../assets/certificate_C.jpg">
                  <div class="certificate_title">應用程式</div>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 發展大世紀 -->
    <section>
      <div class="cbi_develop">
        <b-img src="../assets/cbi_develop.png" fluid alt="Responsive image"></b-img>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@media (max-width: 767px) {
  .content_section .introduce_content {
    text-align: left;
  }

  .content_section .introduce_text {
    font-size: 16px;
  }
}

.bg_gray {
  background-color: #f8fafc;
}

/* 相關認證 */

.certificate_title {
  color: #4baaaa;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
}

.certificate_item .certificate_text {
  text-align: center;
  font-size: 16px;
}

.certificate_img img {
  max-height: 240px;
}

/* 相關認證_mobile */
.certificate_mobile {
  display: none;
}

.certificate_carousel .carousel-caption {
  position: unset;
  text-shadow: none;
  background-color: #fff;
  color: #0f172a;
}

.cbi_develop {
  padding: 30px;
  text-align: center;
  background-image: url(../assets/develop_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
