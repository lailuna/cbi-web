<template>
  <div>
    <b-nav class="nav_header">
      <router-link
        to="/case_gov"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >政府</router-link
      >
      <router-link
        to="/case_defense"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >國防</router-link
      >
      <router-link
        to="/case_transportation"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >交通</router-link
      >
      <router-link
        to="/case_educate"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >教育</router-link
      >
      <router-link
        to="/case_power"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >能源</router-link
      >
      <router-link
        to="/case_finance"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >金融</router-link
      >
      <router-link
        to="/case_other"
        class="nav_header_item"
        exact
        exact-active-class="active"
        >其他</router-link
      >
    </b-nav>
    <div class="nav_body"><router-view></router-view></div>
  </div>
</template>

<style lang="scss">
.case_item {
  margin-bottom: 40px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    border: 2px solid #e2e8f0;
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 30px;

    &:hover {
      text-decoration: none;
      border: 2px solid #4baaaa;
    }
  }

  .caseUnit_name {
    margin-top: 20px;
    font-size: 24px;
    color: #0f172a;
    text-decoration: none;
    line-height: 1;
  }
}
</style>
