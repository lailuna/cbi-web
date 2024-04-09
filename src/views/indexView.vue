<template>
  <div id="app">
    <!-- <div class="topBanner_pc">
      <b-img src="../assets/topBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img src="../assets/topBanner_mobile.png" fluid alt="Responsive image"></b-img>
    </div> -->
    <!-- top_carousel -->
    <section>
      <div class="carousel_section carousel_pc">
        <b-container>
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide img-src="../assets/topBanner01_pc.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/topBanner02_pc.png"></b-carousel-slide>
          </b-carousel>
        </b-container>
      </div>
      <div class="carousel_section carousel_mobile">
        <b-container>
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide img-src="../assets/topBanner01_pc.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/topBanner02_pc.png"></b-carousel-slide>
          </b-carousel>
        </b-container>
      </div>
    </section>
    <!-- 公司簡介 -->
    <section>
      <div class="vision_section">
        <b-container>
          <b-row class="vision_content">
            <b-col md="6" class="vision_text">
              <div class="title">VISION</div>
              <div class="content">
                <p>用服務打造產品，用務實探索創新， 用互惠共創商機</p>
                <span class="highLight_text">「使命必達」</span> 是本公司對客戶的承諾
              </div>
              <router-link to="/companyView" class="primary_btn">公司簡介</router-link>
            </b-col>
            <b-col md="6">
              <b-img src="../assets/vision.png" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
    <!-- carousel -->
    <section>
      <!-- pc -->
      <div class="carousel_section carousel_pc">
        <b-container>
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide img-src="../assets/carousel01.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel02.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel03.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel04.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel05.png"></b-carousel-slide>
          </b-carousel>
          <div class="text-center mt-5">
            <router-link to="/serviceView" class="primary_btn">服務簡介</router-link>
          </div>
        </b-container>
      </div>
      <!-- mobile -->
      <div class="carousel_section carousel_mobile">
        <b-container>
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide img-src="../assets/carousel_RWD_01.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel_RWD_02.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel_RWD_03.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel_RWD_04.png"></b-carousel-slide>
            <b-carousel-slide img-src="../assets/carousel_RWD_05.png"></b-carousel-slide>
          </b-carousel>
          <div class="mt-3">
            <b-row>
              <b-col col="6">
                <router-link to="/companyView" class="primary_btn icon">
                  <b-img
                    src="../assets/icon_service.png"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                  公司簡介
                </router-link>
              </b-col>
              <b-col col="6">
                <router-link to="/case_gov" class="primary_btn icon">
                  <b-img
                    src="../assets/icon_case.png"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                  實績案例
                </router-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col col="6">
                <router-link to="/recruitView" class="primary_btn icon">
                  <b-img
                    src="../assets/icon_recruit.png"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                  人才招募
                </router-link>
              </b-col>
              <b-col col="6">
                <router-link to="/contactView" class="primary_btn icon">
                  <b-img
                    src="../assets/icon_contactUs.png"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                  聯絡我們
                </router-link>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 雲湧快訊 -->
    <section>
      <div class="news_section">
        <div class="news_header">
          <div class="title_en">NEWS</div>
          <div class="title_ch">雲湧快訊</div>
        </div>
        <b-container>
          <b-row class="news_content">
            <b-col md="6" class="news_item">
              <div class="news_date">2024/04/08</div>
              <div class="news_category">最新消息</div>
              <div class="news_title">
                <router-link to="/cbiNewsView">官方網站全新改版上線！</router-link>
              </div>
            </b-col>
          </b-row>
          <!-- <div class="text-center"><button type="button" class="primary_btn">閱讀更多</button></div> -->
        </b-container>
      </div>
    </section>
    <!-- footer -->
    <div class="indexFooter"></div>
  </div>
</template>

<style>
p {
  margin-bottom: 0;
  line-height: 2;
}

p:last-child {
  margin-bottom: 1rem;
}

/* common */

.content_section .title {
  margin-bottom: 25px;
}

.title_style {
  color: #4baaaa;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 2px solid #4baaaa;
  margin-bottom: 30px;
}

.content_section {
  margin: 50px 0;
}

@media (max-width: 767px) {
  .content_section .title {
    font-size: 20px;
    margin-top: 15px;
    text-align: left;
  }

  .title_style {
    font-size: 20px;
  }

  .content_section {
    margin: 20px 0;
  }
}

/* ***********indexView */

/* topBanner */
.topBanner_mobile {
  display: none;
}

@media (max-width: 767px) {
  .topBanner_pc {
    display: none;
  }
  .topBanner_mobile {
    display: block;
  }
}

/* vision */
.vision_section {
  margin-top: 100px;
  background-image: url(../assets/dividingLine.png);
  background-repeat: no-repeat;
  background-position: 0 195px;
  background-size: contain;
}

.vision_section .title {
  color: #4baaaa;
  margin-bottom: 15px;
}

.vision_section .content {
  font-size: 24px;
  line-height: 2;
  width: 400px;
  word-break: break-all;
  margin-bottom: 40px;
}

.highLight_text {
  background-color: #4baaaa;
  color: #fff;
  padding: 7px 0;
}

@media (max-width: 767px) {
  .vision_section {
    margin-top: 30px;
  }

  .vision_content {
    flex-direction: column-reverse;
  }

  .vision_section {
    background-position: -130px 190px;
    background-size: inherit;
  }

  .vision_section .vision_text {
    margin-top: 80px;
  }

  .vision_section .title {
    font-size: 14px;
  }

  .vision_section .content {
    font-size: 16px;
    width: unset;
  }
}

/* 按鈕 */
.primary_btn {
  display: inline-block;
  text-align: center;
  border: 1px solid #4baaaa;
  background-color: transparent;
  border-radius: 8px;
  color: #4baaaa;
  padding: 6px 50px;
  transition: all 0.3s;
}

.primary_btn a {
  color: #4baaaa;
  text-decoration: none;
}

.primary_btn a:hover {
  color: #fff;
  text-decoration: none;
}

@media (max-width: 767px) {
  .primary_btn {
    width: 100%;
  }
}

.primary_btn:hover {
  background-color: #4baaaa;
  color: #fff;
  text-decoration: none;
}

/* carousel */
.carousel_mobile {
  display: none;
}

.carousel_section {
  margin-top: 100px;
  margin-bottom: 50px;
}

.carousel_section .carousel-item {
  background: transparent !important;
}

.carousel_section .carousel-indicators {
  bottom: -60px;
}

.carousel_section .carousel-indicators li {
  background-color: #4baaaa;
}

@media (max-width: 767px) {
  .carousel_pc {
    display: none;
  }

  .carousel_mobile {
    display: block;
  }

  .carousel_mobile .primary_btn.icon {
    padding: 6px 0;
  }

  .carousel_mobile .primary_btn.icon:hover {
    background-color: transparent;
    color: #4baaaa;
  }

  .carousel_mobile .primary_btn.icon img {
    margin-right: 10px;
  }

  .carousel_mobile .row:not(:last-child) {
    margin-bottom: 15px;
  }

  .carousel_section {
    margin-top: 30px;
  }
}

/* news */
.news_section {
  background-image: url(../assets/news_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
}

.news_section .news_header {
  text-align: center;
  margin-bottom: 30px;
}

.news_section .news_header .title_en {
  color: #4baaaa;
  margin-bottom: 8px;
}

.news_section .news_header .title_ch {
  font-size: 28px;
}

.news_section .news_content {
  margin-bottom: 40px;
}

.news_section .news_date {
  font-size: 14px;
  color: #4baaaa;
  margin-bottom: 8px;
}

.news_section .news_title a {
  color: #0f172a;
}

.news_section .news_category {
  background-color: #f1f5f9;
  border-radius: 50px;
  display: inline-block;
  padding: 4px 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  .news_section .news_header .title_ch {
    font-size: 24px;
  }

  .news_section .news_item:not(:last-child) {
    margin-bottom: 25px;
  }
}

/* indexFooter */
.indexFooter {
  background-image: url(../assets/indexFooter.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  margin-bottom: -1px;
}

@media (max-width: 767px) {
  .indexFooter {
    background-position: left;
    background-size: cover;
    min-height: 180px;
    margin-bottom: -1px;
  }
}

.top_carousel {
  margin-top: -200px;
}

.carousel.slide {
  background: rgb(255, 255, 255) !important;
}
</style>
