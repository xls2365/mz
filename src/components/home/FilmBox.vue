<template>
    <div class="filmbox">
        <film :filmarr="arr"></film>
        <div class="filmbottom">
            {{titlename}}
        </div>
        
    </div>
</template>
<script>
import Film from "./Film"
export default {
    name:"FlimBox", 
    props:["type"],
    created(){
        this.get()
    },
    data(){
        return{
            arr:[]
        }
    },
    methods:{
        get(){
        //https://m.maizuo.com/v4/api/film/now-playing?__t=1526460317226&page=1&count=5
            var that = this
            this.$http.get("/anhao/v4/api/film/"+this.type+"?__t="+Date.now()+"&page=1&count=5").then(function(res){
                that.arr=res.data.data.films
            })
        }
    },
    components:{
        Film
    },
    computed:{
        titlename(){
            return this.type=="now-playing"?"更多热映电影":"更多即将上映电影"
        }
    }
}
</script>
<style scoped>
   .filmbox{
       padding-top:30px;
       background: #a8a8a8;
   }
   .filmbottom{
       text-align: center;
   }
</style>
