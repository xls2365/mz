import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city/City'
import Home from '@/components/home/Home'
import Register from '@/components/register/Register'
import Center from '@/components/center/Center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
