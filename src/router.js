import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Knowledge from './views/Knowledge.vue'
import Aboutme from './views/Aboutme'
import Agency from './views/Agency'
import Register from './views/Register'
import Login from './views/Login'

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
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    },
    {
      path: '/agency',
      name: 'agency',
      component: Agency
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }


  ]
})
