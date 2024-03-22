<template>
  <div>
    <section>
      <div class="content_section">
        <div class="service_title">後備指揮部</div>
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
          year: "113",
          name: "國軍涉密退離職人員出境管制系統功能精進",
          detail:
            "協助三軍作業落實退離職涉密人員出境管制，配合法令及相關主管機關要求，持續辦理功能精進，以符作業實需。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "112",
          name: "後備動員暨行政資訊管理系統維護",
          detail:
            "後備動員與行政管理資訊系統之維護，配合機關與業務單位年度計畫及任務推展需求，精進各項作業，提升資訊化作業效能目標",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "112",
          name: "113年網站維護",
          detail:
            "維護機關所屬網站、後端管理平臺現有功能運作，精進後臺管理功能，強化資安防護，符合國發會對政府網站營運之要求並持續提升該網站對民眾服務之品質。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "112",
          name: "112年網站維護",
          detail:
            "維護機關所屬網站、後端管理平臺現有功能運作，精進後臺管理功能，強化資安防護，符合國發會對政府網站營運之要求並持續提升該網站對民眾服務之品質。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "111",
          name: "留守業務資訊系統軟體維護暨功能精進",
          detail:
            "提供系統軟體維護及精進符合業務需求之報表印製、查詢、異動更新及資料傳輸等功能，以穩定、親和性高的系統達成精簡作業流程，提升工作效率之目標。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "110",
          name: "111年網站維護",
          detail:
            "維護機關所屬網站、後端管理平臺現有功能運作，精進後臺管理功能，強化資安防護，符合國發會對政府網站營運之要求並持續提升該網站對民眾服務之品質。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "110",
          name: "109-110年後備動員暨管理資訊系統維護後續擴充",
          detail:
            "後備動員與行政管理資訊系統之維護，配合機關與業務單位年度計畫及任務推展需求，精進各項作業，提升資訊化作業效能目標",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "110",
          name: "留守業務資訊系統軟體維護暨功能精進",
          detail:
            "提供系統軟體維護及精進符合業務需求之報表印製、查詢、異動更新及資料傳輸等功能，以穩定、親和性高的系統達成精簡作業流程，提升工作效率之目標。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "110",
          name: "國軍退離職人員管制系統維護暨功能精進",
          detail:
            "協助三軍作業落實退離職涉密人員出境管制，配合法令及相關主管機關要求，持續辦理功能精進，以符作業實需。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "109",
          name: "留守業務資訊系統軟體維護暨功能精進",
          detail:
            "提供系統軟體維護及精進符合業務需求之報表印製、查詢、異動更新及資料傳輸等功能，以穩定、親和性高的系統達成精簡作業流程，提升工作效率之目標。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "109",
          name: "109-110年後備動員暨管理資訊系統維護",
          detail:
            "後備動員與行政管理資訊系統之維護，配合機關與業務單位年度計畫及任務推展需求，精進各項作業，提升資訊化作業效能目標",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "108",
          name: "109年網站維護",
          detail:
            "維護機關所屬網站、後端管理平臺現有功能運作，精進後臺管理功能，強化資安防護，符合國發會對政府網站營運之要求並持續提升該網站對民眾服務之品質。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "108",
          name: "留守業務資訊系統軟體維護暨功能精進",
          detail:
            "提供系統軟體維護及精進符合業務需求之報表印製、查詢、異動更新及資料傳輸等功能，以穩定、親和性高的系統達成精簡作業流程，提升工作效率之目標。",
          category: "應用系統更新與維護",
          isActive: false,
        },
        {
          year: "107",
          name: "留守業務資訊系統軟體維護",
          detail:
            "提供系統軟體維護及精進符合業務需求之報表印製、查詢、異動更新及資料傳輸等功能，以穩定、親和性高的系統達成精簡作業流程，提升工作效率之目標。",
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
