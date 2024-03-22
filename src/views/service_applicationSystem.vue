<template>
  <div>
    <div class="topBanner_pc">
      <b-img src="../assets/caseBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img src="../assets/caseBanner_mobile.png" fluid alt="Responsive image"></b-img>
    </div>
    <section>
      <div class="content_section">
        <b-container>
          <div class="service_title">應用系統更新與維護</div>
          <div class="service_table">
            <div class="wrapper">
              <div>結標年份</div>
              <div>專案名稱</div>
            </div>
            <div
              class="service_table_item"
              v-for="item in servicetable"
              :key="item.name"
              :class="{ active: item.isActive }"
              @click="toggleActive(item)"
            >
              <div class="case_information">
                <div>{{ item.year }}</div>
                <div>{{ item.name }}</div>
                <div><b-img
                  src="../assets/angle.png"
                  fluid
                  class="icon_angle"
                  alt="Responsive image"
                ></b-img></div>
              </div>
              <div class="case_detail" v-show="item.isActive">
                <hr />
                <div>{{ item.detail }}</div>
              </div>
            </div>
          </div>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.service_title {
  font-size: 36px;
  font-weight: bold;
  color: #4baaaa;
}
.service_table {
  .wrapper {
    display: grid;
    grid-template-columns: 0.5fr 1fr .1fr;
    border: 1px solid #d8dcde;
    background-color: #f9f9f9;
    border-radius: 4px;
    padding: 15px 25px;
    margin-bottom: 15px;
  }

  .service_table_item {
    border: 1px solid #d8dcde;
    background-color: #fff;
    border-radius: 4px;
    padding: 15px 25px;

    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    &.active {
      .icon_angle {
        rotate: (-180deg);
      }
    }
    .case_information {
      display: grid;
      grid-template-columns: 0.5fr 1fr .1fr;
      position: relative;
    }
  }

  .icon_angle {
    position: absolute;
    right: 0;
    top: 45%;
    transition: all 0.3s;
  }
}

@media (max-width: 767px) {
  .service_title {
    font-size: 20px;
    margin-bottom: 15px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      servicetable: [
        {
          year: "112",
          name: "國防部全民防衛動員署112年網站維護",
          detail:
            "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
          isActive: false,
        },
        {
          year: "111",
          name: "設備設施管理系統軟體維護工作(第1次契約變更)",
          detail:
            "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
          isActive: false,
        },
        {
          year: "109",
          name: "運務管理系統軟體維護工作",
          detail:
            "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
          isActive: false,
        },
        {
          year: "108",
          name: "設備設施管理系統軟體維護工作",
          detail:
            "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
          isActive: false,
        },
        {
          year: "108",
          name: "帳務系統維護工作",
          detail:
            "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    toggleActive: function (item) {
      item.isActive = !item.isActive;
    },
  },
};
</script>
