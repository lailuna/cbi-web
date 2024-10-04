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
            <div class="certificate">
              <b-container fluid>
                <b-row>
                  <b-col
                    lg="4"
                    class="certificate_item"
                    v-for="item in certificateList"
                    :key="item.id"
                  >
                    <div class="certificate_img">
                      <b-img :src="item.img" fluid :alt="item.title"></b-img>
                    </div>
                    <div class="certificate_category">{{ item.category }}</div>
                    <p class="certificate_title">{{ item.title }}</p>
                  </b-col>
                </b-row>
              </b-container>
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
.certificate_category {
  color: #4baaaa;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.certificate_item {
  .certificate_img {
    text-align: center;
    img {
      max-height: 450px;
    }
  }

  .certificate_title {
    text-align: center;
    font-size: 16px;
  }
}

.cbi_develop {
  padding: 30px;
  text-align: center;
  background-image: url(../assets/develop_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
export default {
  data() {
    return {
      certificateList: [
        {
          img: require("../assets/certificate_PMP.png"),
          category: "專案管理",
          title: "國際PMP專業證書",
        },
        {
          img: require("../assets/certificate_CompTIA.jpg"),
          category: "資訊安全",
          title: "Microsoft Certified Professional",
        },
        {
          img: require("../assets/certificate_DB.png"),
          category: "資料庫",
          title: "Microsoft Certified Solutions Associate (SQL server)",
        },
        {
          img: require("../assets/certificate_ISO_2013.png"),
          category: "資訊安全",
          title: "ISO 27001:2013",
        },
        {
          img: require("../assets/certificate_ISO_2013_train.png"),
          category: "資訊安全",
          title: "ISO 27001:2013資訊安全管理系統主導稽核員",
        },
        {
          img: require("../assets/certificate_C.jpg"),
          category: "應用程式",
          title: "資策會C#工程師就業養成班",
        },
        {
          img: require("../assets/certificate_ISO_2022_ch.jpg"),
          category: "資訊安全",
          title: "ISO 27001:2022",
        },
        {
          img: require("../assets/certificate_ISO_2022_train.png"),
          category: "資訊安全",
          title: "ISO 27001:2022資訊安全管理系統主導稽核員",
        },
      ],
    };
  },
};
</script>
