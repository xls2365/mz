import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '珠海',
    isshow: false
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    },
    showlist(content){
      content.commit("show")
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    },
    show (state, val) {
      state.isshow = !state.isshow
    }
  }
})
