import Vue from 'vue'
import VueRouter from 'vue-router'

import layoutPage from '../Layout-page.vue';
import indexView from '../views/indexView.vue';
import companyView from '../views/companyView.vue';
import serviceView from '../views/serviceView.vue';
import caseView from '../views/caseView.vue';
import recruitView from '../views/recruitView.vue';
import contactView from '../views/contactView.vue';

import govermentView from '../views/govermentView';
import enterpriseView from '../views/enterpriseView';

import case_gov from '../views/case_gov';
import case_defense from '../views/case_defense';
import case_transportation from '../views/case_transportation';
import case_educate from '../views/case_educate';
import case_power from '../views/case_power';
import case_finance from '../views/case_finance';
import case_other from '../views/case_other';



import cbiNewsView from '../views/cbiNewsView';


import service_applicationSystem from '../views/service_applicationSystem';

// 政府
import case_gov_tainan from '../views/case_gov_tainan';
import case_gov_nfa from '../views/case_gov_nfa';
import case_gov_tpigov from '../views/case_gov_tpigov';
import case_gov_hccg from '../views/case_gov_hccg';
import case_gov_ktnp from '../views/case_gov_ktnp';

// 國防
import case_defence_afrc from '../views/case_defence_afrc';
import case_defence_indsr from '../views/case_defence_indsr';
import case_defence_aodm from '../views/case_defence_aodm';

// 交通
import case_transportation_tpmetro from '../views/case_transportation_tpmetro';
import case_transportation_ntmetro from '../views/case_transportation_ntmetro';
import case_transportation_tymetro from '../views/case_transportation_tymetro';
import case_transportation_tcmetro from '../views/case_transportation_tcmetro';

// 教育
import case_educate_ntnu from '../views/case_educate_ntnu';
import case_educate_NTCU from '../views/case_educate_NTCU';
import case_educate_ner from '../views/case_educate_ner';
import case_educate_iii from '../views/case_educate_iii';
import case_educate_ncl from '../views/case_educate_ncl';

// 能源
import case_power_radlab from '../views/case_power_radlab';

// 金融
import case_finance_nta from '../views/case_finance_nta';
import case_finance_fsc from '../views/case_finance_fsc';

// 其他
import case_other_ncdr from '../views/case_other_ncdr';
import case_other_tph from '../views/case_other_tph';
import case_other_tipc from '../views/case_other_tipc';



Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/indexView"
  },
  {
    path: "/",
    redirect: "/indexView"
  },
  {
    path: '/',
    name: 'layoutPage',
    component: layoutPage,
    children: [
      {
        path: '/indexView',
        name: 'indexView',
        component: indexView,
      },
      {
        path: '/companyView',
        name: 'companyView',
        component: companyView,
      },
      {
        path: '/serviceView',
        name: 'serviceView',
        component: serviceView,
      },
      {
        path: '/caseView',
        name: 'caseView',
        component: caseView,
        children: [
          {
            path: '',
            component: govermentView,
            name: 'govermentView',
          },
          {
            path: '/govermentView',
            name: 'govermentView',
            component: govermentView,
            children: [
              {
                path: '',
                name: 'case_gov',
                component: case_gov,
              },
              {
                path: '/case_gov',
                name: 'case_gov',
                component: case_gov,
              },
              {
                path: '/case_defense',
                name: 'case_defense',
                component: case_defense,
              },
              {
                path: '/case_transportation',
                name: 'case_transportation',
                component: case_transportation,
              },
              {
                path: '/case_educate',
                name: 'case_educate',
                component: case_educate,
              },
              {
                path: '/case_power',
                name: 'case_power',
                component: case_power,
              },
              {
                path: '/case_finance',
                name: 'case_finance',
                component: case_finance,
              },
              {
                path: '/case_other',
                name: 'case_other',
                component: case_other,
              },

              
              // 政府
              {
                path: '/case_gov_tainan',
                name: 'case_gov_tainan',
                component: case_gov_tainan,
              },
              {
                path: '/case_gov_nfa',
                name: 'case_gov_nfa',
                component: case_gov_nfa,
              },
              {
                path: '/case_gov_tpigov',
                name: 'case_gov_tpigov',
                component: case_gov_tpigov,
              },
              {
                path: '/case_gov_hccg',
                name: 'case_gov_hccg',
                component: case_gov_hccg,
              },
              {
                path: '/case_gov_ktnp',
                name: 'case_gov_ktnp',
                component: case_gov_ktnp,
              },
              // 國防
              {
                path: '/case_defence_afrc',
                name: 'case_defence_afrc',
                component: case_defence_afrc,
              },
              {
                path: '/case_defence_indsr',
                name: 'case_defence_indsr',
                component: case_defence_indsr,
              },
              {
                path: '/case_defence_aodm',
                name: 'case_defence_aodm',
                component: case_defence_aodm,
              },
              // 交通
              {
                path: '/case_transportation_tpmetro',
                name: 'case_transportation_tpmetro',
                component: case_transportation_tpmetro,
              },
              {
                path: '/case_transportation_ntmetro',
                name: 'case_transportation_ntmetro',
                component: case_transportation_ntmetro,
              },
              {
                path: '/case_transportation_tymetro',
                name: 'case_transportation_tymetro',
                component: case_transportation_tymetro,
              },
              {
                path: '/case_transportation_tcmetro',
                name: 'case_transportation_tcmetro',
                component: case_transportation_tcmetro,
              },
              // 教育
              {
                path: '/case_educate_ntnu',
                name: 'case_educate_ntnu',
                component: case_educate_ntnu,
              },
              {
                path: '/case_educate_NTCU',
                name: 'case_educate_NTCU',
                component: case_educate_NTCU,
              },
              {
                path: '/case_educate_ner',
                name: 'case_educate_ner',
                component: case_educate_ner,
              },
              {
                path: '/case_educate_iii',
                name: 'case_educate_iii',
                component: case_educate_iii,
              },
              {
                path: '/case_educate_ncl',
                name: 'case_educate_ncl',
                component: case_educate_ncl,
              },
              // 能源
              {
                path: '/case_power_radlab',
                name: 'case_power_radlab',
                component: case_power_radlab,
              },
              // 金融
              {
                path: '/case_finance_nta',
                name: 'case_finance_nta',
                component: case_finance_nta,
              },
              {
                path: '/case_finance_fsc',
                name: 'case_finance_fsc',
                component: case_finance_fsc,
              },
              // 其他
              {
                path: '/case_other_ncdr',
                name: 'case_other_ncdr',
                component: case_other_ncdr,
              },
              {
                path: '/case_other_tph',
                name: 'case_other_tph',
                component: case_other_tph,
              },
              {
                path: '/case_other_tipc',
                name: 'case_other_tipc',
                component: case_other_tipc,
              },
            ]
          },
          {
            path: '/enterpriseView',
            name: 'enterpriseView',
            component: enterpriseView,
          }
        ]
      },
      {
        path: '/recruitView',
        name: 'recruitView',
        component: recruitView,
      },
      {
        path: '/contactView',
        name: 'contactView',
        component: contactView,
      },
      {
        path: '/cbiNewsView',
        name: 'cbiNewsView',
        component: cbiNewsView,
      },
      {
        path: '/service_applicationSystem',
        name: 'service_applicationSystem',
        component: service_applicationSystem,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})


export default router



