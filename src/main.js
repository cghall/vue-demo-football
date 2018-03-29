import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Competition from './components/Competition.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/competition/:id', component: Competition }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
