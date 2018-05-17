<template>
<div>
    <div class="apphead">
        <div class="icon" @click="show" >
            <i class="fa fa-align-justify"></i>
        </div>
        <div class="move" @click="show">
            卖座电影
        </div>
        <router-link to="/register" class="login">
            <b class="fa fa-user"></b>
        </router-link>
        <div class="address">
            <router-link to="/city">{{this.$store.state.city}}</router-link>
            <u class="fa fa-chevron-down"></u>
        </div>
    </div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="mask" v-show="isshow" @click="show"></div>
    </transition>
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <app-list v-show="isshow"></app-list>
    </transition>
</div>
</template>
<script>
import AppList from "./AppList"
import {mapMutations} from "vuex"
export default {
    name:"AppHeader",
    methods:{
        // show(){
        //     this.$store.commit("show")
        // }
        ...mapMutations(["show"])
    },
    computed:{
        isshow(){
            return this.$store.state.isshow
        }
    },
    components:{AppList},
}
</script>
<style scoped lang="stylus">
    .apphead{
        background: #282828;
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        width: auto;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
         .icon{
            float: left;
            height: 50px;
            width: 48px;
            text-align: center;
            border-right: 1px solid #222;
            box-shadow: 1px 0 1px #363636;
            color: #999;
        }
        .move{
            float: left;
            padding: ;
            float: left;
            font-size: 14px;
            color: #efefef;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    .apphead{
         float: left;
        font-size: 14px;
        padding: 0 6px;
    }
    .address{
        float: right ;
        font-size: 14px;
        padding: 0 6px;
        color: #999;
    }
    .address a{
        color: #999;
    }
    .login{
        float: right ;
        font-size: 16px;
        width: 48px;
        text-align: center;
        color: #999;
    }
    .mask{
        position :fixed;
        height:100%;
        width:100%;
        background:rgba(0,0,0,.6) ;
        z-index:10;
    }
</style>
