<template>
<div>
    <div class="film-item" v-for="item in films" :key="item.id">
        <div class="img-box left">
        <img :src="item.poster.origin" alt="">
      </div>
      <div class="right">
        <div class="rage" >{{item.grade}}</div>
        <h3 class="title">{{item.name}}</h3>
        <p class="desc">{{item.intro}}</p>
        <p class="info" v-if="type=='now-playing'">
          <span class="number">{{item.cinemaCount}}</span>家影院上映   
          <span class="number">{{item.watchCount}}</span>人购票  
        </p>
        <p class="time" v-else>
          <span >{{item.premiereAt | time}}</span>上映  {{item.premiereAt | day}} 
        </p>
      </div>
    </div>
</div>
</template>
<script>
import Vue from "vue"
Vue.filter("time",function(val){
    var date = new Date(val);
    var m = date.getMonth()+1;
    var d = date.getDate();
    return m+"月"+d+"日"
})
Vue.filter('day', value => {
    let date = new Date(value)
    let result = ''
    switch (date.getDay()) {
        case 0: result = '日';break;
        case 1: result = '一';break;
        case 2: result = '二';break;
        case 3: result = '三';break;
        case 4: result = '四';break;
        case 5: result = '五';break;
        case 6: result = '六';break;
    }
    return  '星期' + result
})
export default {
    name:"List",
    props:["type"],
    created(){
        this.get()
    },
    data(){
        return{
            films:[]
        }
    },
    methods:{
        get(){
            ///v4/api/film/coming-soon?page=1&count=7
            var that = this
            this.$http.get("/anhao/v4/api/film/"+this.type+"?__t="+Date.now()+"&page=1&count=7").then(function(res){
                that.films=res.data.data.films
            })
        }
    },
    watch:{
        type(){
            this.get()
        }
    }
}
</script>
<style lang="stylus" scoped>
     .film-item {
       padding: 20px 0px;
           border-bottom: dashed 1px #c9c9c9;
       display: flex;
       align-items: center;

       .left {
         flex-grow: 0;flex-shrink: 0;
         width: 0.6rem;
         img{
           width: 100%;
         }
       }

       .right{
         flex-grow: 1;flex-shrink: 1;
         padding-left: 15px;
         position: relative;
         overflow: hidden;
         .title {
               font-size: 16px;
              line-height: 32px;
              color: #000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
         }
         .desc,.info,.time{
                  
                  height: 24px;
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 80%;
                display: inline-block;
         }

         .number {
           color: #8aa2bf;
         }
         .rage{
           position: absolute;
           font-size: 16px;
          line-height: 32px;
          color: #fc7103;
          right: 30px;
         }
         .time{
            color: #ffb375;
         }
       }
  }
</style>
