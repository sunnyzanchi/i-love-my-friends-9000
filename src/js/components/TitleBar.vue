<style lang="sass">
</style>
<!-- ### -->
<template lang="html">
  <div class="title-bar">
    <i class="material-icons menu"
       :class="{'menu-grow': searchBoxShow}"
       @click="showDrawer">menu</i>
    <transition :name="searchTransition" mode="in-out">
      <input type="textbox"
             class="search-box"
             v-show="searchBoxShow">
    </transition>
    <h1 v-show="!searchBoxShow">I Love My Friends 9000</h1>
    <i class="material-icons"
       v-show="!searchBoxShow"
       @click="toggleSearchBox">search</i>
    <i class="material-icons"
       v-show="searchBoxShow"
       @click="toggleSearchBox">close</i>
  </div>
</template>
<!-- ### -->
<script>
module.exports = {
  data () {
    return {
      searchBoxShow: false
    }
  },
  computed: {
    searchTransition(){
      if(this.searchBoxShow) return 'searchbar-slidein';
      return '';
    }
  },
  ready () {},
  attached () {},
  methods: {
    showDrawer(){
    },
    toggleSearchBox(){
      this.searchBoxShow = !this.searchBoxShow;
    }
  },
  components: {}
}
</script>
