import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Overview from './views/Overview.vue'
import School from './views/School.vue'
import Aboutme from './views/Aboutme.vue'
import Agency from './views/Agency.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
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
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }, {
      path: '/school',
      name: 'school',
      component: School
    }
    , {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    }
    , {
      path: '/agency',
      name: 'agency',
      component: Agency
    }
    , {
      path: '/login',
      name: 'login',
      component: Login
    }
    , {
      path: '/register',
      name: 'register',
      component: Register
    }

  ]
})
