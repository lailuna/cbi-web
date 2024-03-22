<template>
  <div>
    <section>
      <div class="content_section">
        <div class="service_title">新北捷運</div>
        <div class="service_table">
          <div class="wrapper">
            <div>結標年份</div>
            <div>專案名稱</div>
            <div>服務類別</div>
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
              <div>{{ item.category }}</div>
              <div>
                <b-img
                  src="../assets/angle.png"
                  fluid
                  class="icon_angle"
                  alt="Responsive image"
                ></b-img>
              </div>
            </div>
            <div class="case_detail" v-show="item.isActive">
              <hr />
              <div>{{ item.detail }}</div>
            </div>
          </div>
        </div>
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
    grid-template-columns: 0.5fr 1.5fr 1fr 0.5fr;
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
      grid-template-columns: 0.5fr 1.5fr 1fr 0.5fr;
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
          name: "112年度物料管理系統維護工作",
          detail:
            "系統軟體維護及功能精進，包含各項物料作業之申請、查詢、審核功能，與資訊系統安全管理及資安維護。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "110",
          name: "物料管理系統開發暨維修管理系統擴充功能案",
          detail: "物料管理系統開發與維修系統功能擴充，與資訊系統安全管理及資安維護。",
          category: "應用系統更新與維護",
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
