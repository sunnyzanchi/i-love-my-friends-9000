<style lang="sass">
</style>
<!-- ### -->
<template>
  <div class="card">
    <div class="card-title">
      <h1>{{person.name}}</h1>
      <h2>{{humanDate}}</h2>
    </div>
    <h2>Turning {{age}}</h2>
    <div class="card-content">
      <ul class="gift-list">
        <li v-for="gift in person.gifts">{{gift.name}}</li>
      </ul>
    </div>
  </div>
</template>
<!-- ### -->
<script>
const moment = require('moment');
module.exports = {
  attached(){},
  components: {},
  computed: {
    age(){
      return moment().diff(this.person.birthdate, 'years') + 1;
    },
    humanDate(){
      return moment(this.person.birthdate).format('MMMM Do');
    }
  },
  data(){
    return {}
  },
  methods: {},
  props: ['person'],
  ready () {}
}
</script>
