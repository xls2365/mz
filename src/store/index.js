import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
var store = new Vuex.Store({
    strict:true,
    state:{
        count:0,
        isshow:false
    },
    mutations:{
        show(state,val){
            state.isshow=!state.isshow
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{}
})
export default store