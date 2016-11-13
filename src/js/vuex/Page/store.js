const Vue = require('vue');
const Vuex = require('vuex');

module.exports = {
  state: {
    dialog: '',
    page: ''
  },
  mutations: {
    changePage(state, page){
      state.page = page;
    },
    changeDialog(state, dialog){
      state.dialog = dialog;
    },
    closeDialog(state){
      state.dialog = '';
    }
  },
  getters: {

  }
}
