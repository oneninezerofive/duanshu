import './assets/shouye.css'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import {
  Carousel,
  CarouselItem,
  InfiniteScroll

} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(InfiniteScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
