<template>
  <div>
    <section>
      <div class="content_section">
        <div class="service_title">國家災害防救科技中心</div>
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
          year: "106",
          name: "災防資料庫維護服務案",
          detail: "",
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
