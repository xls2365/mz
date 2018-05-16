import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    }
  ]
})
