const Vue = require('vue');
const VueRouter = require('vue-router');

const Card = require('./components/Card.vue');
const MainPage = require('./pages/MainPage.vue');

const routes = [{
  path: '/',
  component: MainPage
}]

Vue.use(VueRouter);
var router = new VueRouter({
  routes
});

// router.map({
//   '/': {
//     component: Card
//   }
//   '/product/:id': {
//     name: 'product',
//     component: ProductPage
//   },
//   '/cart': {
//     component: CartPage
//   }
// })

module.exports = router;
