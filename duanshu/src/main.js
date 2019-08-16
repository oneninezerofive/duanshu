import './assets/shouye.css'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
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
