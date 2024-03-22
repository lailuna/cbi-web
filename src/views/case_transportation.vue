<template>
  <div>
    <b-row>
      <b-col cols="12" md="4" class="case_item">
        <router-link to="/case_transportation_tpmetro">
          <b-img
            src="../assets/client_tpmetro.png"
            fluid
            alt="Responsive image"
          ></b-img>
          <p class="caseUnit_name">臺北捷運</p>
        </router-link>
      </b-col>
      <b-col cols="12" md="4" class="case_item">
        <router-link to="/case_transportation_ntmetro">
          <b-img src="../assets/client_ntmetro.png" fluid alt="Responsive image"></b-img>
          <p class="caseUnit_name">新北捷運</p>
        </router-link>
      </b-col>
      <b-col cols="12" md="4" class="case_item">
        <router-link to="/case_transportation_tymetro">
          <b-img src="../assets/client_tymetro.png" fluid alt="Responsive image"></b-img>
          <p class="caseUnit_name">桃園捷運</p>
        </router-link>
      </b-col>
      <b-col cols="12" md="4" class="case_item">
        <router-link to="/case_transportation_tcmetro">
          <b-img src="../assets/client_tcmetro.png" fluid alt="Responsive image"></b-img>
          <p class="caseUnit_name">臺中捷運</p>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>
