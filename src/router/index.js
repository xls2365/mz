import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
