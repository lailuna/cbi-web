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
    <!-- 相關職缺 -->
    <section>
      <div class="content_section">
        <b-container>
          <div class="section_title"><span class="title_style">加入我們</span></div>
          <div class="text-center">
            <a
              href="https://www.104.com.tw/company/1a2x6bk09e"
              class="primary_btn"
              target="_blank"
              >前往人力銀行</a
            >
            <p class="mt-2">成為我們的一員，透過人力銀行投遞履歷吧!</p>
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
