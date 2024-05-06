<template>
  <div>
    <div class="topBanner_pc">
      <b-img src="../assets/recruitBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img
        src="../assets/recruitBanner_mobile.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <!-- 敘述 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="">
            <p>
              研發團隊源自於各方技術好手：以我們多年來在客製化系統開發、公私有雲應用、跨平台整合與資訊軟體設計的開發經驗，致力於提供客戶在特定市場與應用的最佳解決方案…
            </p>
          </div>
        </b-container>
      </div>
    </section>
    <!-- 照片 -->
    <section>
      <div class="job_section">
        <b-row no-gutters>
          <b-col lg="3">
            <b-img src="../assets/active_img01.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col lg="3">
            <b-img src="../assets/active_img02.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col lg="3">
            <b-img src="../assets/active_img03.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col lg="3">
            <b-img src="../assets/active_img04.png" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- 相關職缺 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="section_title"><span class="title_style">加入我們 </span></div>
          <!-- <b-container fluid>
            <b-row class="align-items-center">
              <b-col md="6"><div class="title_style job_name">專案管理師(PM)</div></b-col>
              <b-col md="6">
                <div class="idea_section">
                  <ul class="idea_list">
                    <li>如果你自認具有以下特質，請速速與我們聯絡喔！</li>
                    <li>1. 柯南的理解力與觀察力 (從功能分析到流程的掌握)</li>
                    <li>2. 鳴人的毅力 (堅持到底的信念)</li>
                    <li>3. 魯夫的團隊管理 (同舟共濟、客戶優先)</li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-container> -->

          <div class="text-center">
            <a
              href="https://www.104.com.tw/company/1a2x6bk09e"
              class="primary_btn"
              target="_blank"
              >前往人力銀行</a
            >
            <p>成為我們的一員，透過人力銀行投遞履歷吧!</p>
          </div>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style>
/* 經營理念 */
.idea_section {
  text-align: left;
}

.idea_list {
  font-size: 16px;
}
/* 相關職缺 */
.job_name {
  border-bottom: 0;
}

@media (max-width: 767px) {
  .job_section {
    display: flex;
    flex-direction: column;
  }

  .job_name {
    font-size: 24px;
    margin-bottom: 15px;
  }
}
</style>
