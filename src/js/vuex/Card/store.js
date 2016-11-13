const Vue = require('vue');
const Vuex = require('vuex');

module.exports = {
  state: {
    people: [],
    gifts: []
  },
  mutations: {
    add(state, {name, birthday, gifts}){
      state.people.push({name, birthday, gifts});
    }
  },
  getters: {

  }
}
