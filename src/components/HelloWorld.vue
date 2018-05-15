
<template>
  <div class="swiper-container" >
      <div class="swiper-wrapper">
          <div v-for="item in arr" class="swiper-slide" :key="item.id"><img width="100%" :src="item.imageUrl" alt=""></div>
      </div>  
  </div> 
</template>


<script>
import "../../static/swiper.min.css"
import Swiper from "../../static/swiper.min.js"
export default {
  name: 'HelloWorld',
  created(){
    this.get()
  },
  data () {
    return{
      arr:[]
    }
  },
  methods:{
    get(){
       //https://m.maizuo.com/v4/api/billboard/home?__t=1526297467009
       var that = this
      this.$http.get("/anhao/v4/api/billboard/home?__t=1526297467009").then(function(res){
        that.arr = res.data.data.billboards
      })
    }
  },
  updated(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }
      }) 
           
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
