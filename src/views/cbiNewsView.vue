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
          <div class="news_tabs">
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab v-for="item in newsList" :title="item.title" :key="item.title">
                  <b-card-text>
                    <div class="news_header">
                      <div class="news_date">{{ item.date }}</div>
                      <div class="news_category">{{ item.category }}</div>
                    </div>
                    <div class="news_content">
                      <div class="title">{{ item.title }}</div>
                      <div class="content">{{ item.content }}</div>
                    </div>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.news_tabs {
  .tabs {
    min-height: 250px;
  }

  .card-header {
    background-color: #fff;
  }

  .nav-item {
    .nav-link {
      color: #0f172a;
      border-top: 4px solid #4baaaa;
      background-color: #f0f2f4;
      padding: 20px;

      &.active {
        background-color: #e5f3f3;
      }
    }
  }

  .news_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .news_date {
      color: #4baaaa;
      font-size: 14px;
      margin-right: 15px;
    }

    .news_category {
      display: inline-block;
      padding: 5px 10px;
      background-color: #f1f5f9;
      border-radius: 50px;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  .news_content {
    .title {
      font-size: 32px;
      font-weight: bold;
      color: #0f172a;
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 767px) {
  .news_tabs {
    .tabs {
      min-height: 500px;

      .col-auto {
        width: 100%;
      }

      .nav-item {
        padding: 10px 0;
      }
    }
    .news_content {
      .title {
        font-size: 24px;
      }
      .content {
        font-size: 16px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          date: "2024/09/01",
          category: "最新消息",
          title: "賀! 正式通過 ISO 27001:2022 國際認證",
          content: "資安再升級，本公司正式取得 ISO 27001:2022 的國際認證 !",
        },
        {
          date: "2024/04/08",
          category: "最新消息",
          title: "官方網站全新改版上線！",
          content:
            "官方網站全新改版，期許帶給您更豐富的資訊，更好的瀏覽體驗！我們將秉持使命必達的精神，持續為政府機關及各行各業提供專業與優質的服務～",
        },
      ],
    };
  },
};
</script>
