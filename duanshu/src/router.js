import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Knowledge from './views/Knowledge.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    }

  ]
})
