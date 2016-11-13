const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);

const cards = require('./Card/store.js');
module.exports = new Vuex.Store({
  modules: {
    cards
  },
  mutations: {

  },
  getters: {

  }
});
