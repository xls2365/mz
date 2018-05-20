import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '珠海',
    inputPhone: '',
    isshow: false
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    },
    changePhone (ctx, inputPhone) {
      ctx.commit('changePhone', inputPhone)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    },
    changePhone (state, inputPhone) {
      state.inputPhone = inputPhone
    },
    show (state, val) {
      state.isshow = !state.isshow
    }
  }
})
