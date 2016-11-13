<style lang="sass">
</style>
<!-- ### -->
<template>
  <div>
    <title-bar></title-bar>
    <main class="card-container">
      <person-card v-for="friend in friends"
                   :person="friend"></person-card>
    </main>
  </div>
</template>
<!-- ### -->
<script>
const qwest = require('qwest');
const TitleBar = require('../components/TitleBar.vue');
const PersonCard = require('../components/PersonCard.vue');
module.exports = {
  attached(){},
  components: {
    PersonCard, TitleBar
  },
  computed: {

  },
  created(){
    var self = this;
    qwest.get('allfriends').then(function(xhr, res){
      self.friends = res;
    });
  },
  data(){
    return {
      friends: []
    }
  },
  methods: {},
  ready(){}
}
</script>
