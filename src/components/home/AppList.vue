<template>
    <div class="applist">
        <router-link tag="li" v-for="item in list" :key="item.id" :to="item.path">{{item.title}}</router-link>     
    </div>
</template>
<script>
export default {
    name:"AppList",
    data(){
        return {
            list:[
                {id:1,title:"首页",path:"/index"},
                {id:2,title:"影片",path:"/film"},
                {id:3,title:"影院",path:"/cenima"},
                {id:4,title:"商城",path:"/shop"},
                {id:5,title:"我的",path:"/own"},
                {id:6,title:"卖座卡",path:"/card"}
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .applist{ 
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background: #282828;
        position: absolute;
        z-index:100;
        top: 0;
        right: 110px;
        bottom: 0;
        left: 0;
        padding-top:50px;
        li{
            
            width: 100%;
            padding: 0 16px;
            border-bottom: 1px dotted #333;
            color: #9a9a9a;
             font-size: 14px;
            line-height: 50px;
        }
    }
</style>
