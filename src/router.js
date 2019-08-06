import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Knowledge from './views/Knowledge.vue'
import Overview from './views/Overview.vue'
import School from './views/School.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    }, {
      path: '/overview',
      name: 'overview',
      component: Overview
    }, {
      path: '/school',
      name: 'school',
      component: School
    }
  ]
})
