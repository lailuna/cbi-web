<template>
  <div class="fixed-top topMenu">
    <div class="container">
      <b-navbar class="p-3" toggleable="lg">
        <b-navbar-brand href="#">
          <b-img
            :src="require('../img/cbi_logo.png')"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="topMenu_item ml-auto">
            <b-nav-item href="#">首頁</b-nav-item>
            <b-nav-item href="#">公司簡介</b-nav-item>
            <b-nav-item href="#">服務簡介</b-nav-item>
            <b-nav-item href="#">實績案例</b-nav-item>
            <b-nav-item href="#">人才招募</b-nav-item>
            <b-nav-item href="#">聯絡我們</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
