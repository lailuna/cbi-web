<template>
  <div>
    <div class="topBanner_pc">
      <b-img src="../assets/cbinewsBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img
        src="../assets/cbinewsBanner_mobile.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <section>
      <div class="content_section">
        <b-container>
          <b-row>
            <b-col md="3">
              <div class="title">雲湧訊息</div>
              <div class="news_list">
                <div class="news_item">
                  <div class="news_date">2024/01/01</div>
                  <div class="news_category">最新消息</div>
                  <div class="news_title">
                    <router-link to="/cbiNewsView">官方網站全新改版上線！</router-link>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col md="9">
              <div class="news_content">
                <div class="news_photo"></div>
                <div class="title">官方網站全新改版上線！</div>
                <div class="content">
                  官方網站全新改版，象徵雲湧資訊將以全新的面相展現給長久以來一直不斷支持我們的客戶，持續提供專業與優質的服務。
                  新官網為提供最佳的使用體驗與服務，採用「響應式網站」的概念，適用於「桌機、手機、平板」等行動裝置。
                  期許帶給您更好的服務！舊雨新知，請多指教！
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #4baaaa;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.news_list {
  .news_item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    .news_date {
      color: #4baaaa;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .news_category {
      display: inline-block;
      padding: 5px 10px;
      background-color: #f1f5f9;
      border-radius: 50px;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .news_title {
      a {
        color: #0f172a;
      }
    }
  }
}

.news_content {
  .news_photo {
    min-height: 400px;
    background-image: url(../assets/news_example.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #0f172a;
    margin-top: 25px;
  }
}
</style>
