/* I Love My Friends 9000 */
/* 0.0.0                  */
/* Eric Zanchi            */
/* ###################### */
const Vue = require('vue');

const Pages = {
  MainPage: require('./pages/MainPage.vue')
}

for(let page in Pages){
  Vue.component(page);
}
/*
** Vuex is for state management. It's used for a centralized global state.
** I'm starting development without it, and if it makes sense to use it, we will
*/
//const Vuex = require('vuex');
//Vue.use(Vuex);
//const store = require('./vuex/store.js');

/*
** Vue router manages the url when the pages changes. Will likely implement later
*/
//const router = require('./router.js');

/*
** Vuex router sync makes sure vuex is synced with the current route
*/
//const sync = require('vuex-router-sync').sync;

var app = new Vue({
  el: '#app',
  data: {
    page: Pages.MainPage,
    dialog: ''
  },
  methods: {
    changedialogReceiver(){},
    changepageReceiver(){}
  }
});
