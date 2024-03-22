<template>
  <b-row class="enterprise">
    <b-col cols="12" md="4" class="case_item">
      <div class="case_item_content">
        <b-img src="../assets/client_quanta.png" fluid alt="Responsive image"></b-img>
        <p class="caseUnit_name">廣達電腦</p>
      </div>
    </b-col>
    <b-col cols="12" md="4" class="case_item">
      <div class="case_item_content">
        <b-img src="../assets/client_seed.png" fluid alt="Responsive image"></b-img>
        <p class="caseUnit_name">台灣實瞳股份有限公司</p>
      </div>
    </b-col>
    <b-col cols="12" md="4" class="case_item">
      <div class="case_item_content">
        <b-img src="../assets/client_FATEK.png" fluid alt="Responsive image"></b-img>
        <p class="caseUnit_name">永宏電機</p>
      </div>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.enterprise {
  .case_item {
    margin-bottom: 0;
  }

  .case_item_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border: 2px solid #e2e8f0;
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 30px;
  }
}
</style>
