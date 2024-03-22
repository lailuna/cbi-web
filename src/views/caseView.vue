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
          <div>
            <b-nav class="nav_header">
              <router-link
                to="/govermentView"
                class="nav_header_item"
                exact
                exact-active-class="active"
                >政府·機關</router-link
              >
              <router-link
                to="/enterpriseView"
                class="nav_header_item"
                exact
                exact-active-class="active"
                >企業</router-link
              >
            </b-nav>
            <div class="nav_body"><router-view></router-view></div>
          </div>
        </b-container>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.nav_header {
  border-bottom: 1px solid #bfbfbf;
  a {
    color: #334155;

    &:hover {
      text-decoration: none;
      color: #4baaaa;
    }
  }

  .nav_header_item {
    font-size: 24px;
    font-weight: bold;
    margin-right: 35px;

    &.active {
      color: #4baaaa;
      border-bottom: 5px solid #4baaaa;
    }
  }
}

.nav_body {
  margin-top: 30px;
}
</style>
