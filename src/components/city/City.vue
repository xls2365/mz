<template>
<div class="list-wrapper">
  <div class="list">
      <div class="area">
        <div class="title">GPS定位你当前的位置</div>
        <div class="now">{{this.$store.state.city}}</div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="hot" >
          <span v-for="item of hots" :key="item" @click="handleCityClick(item)">{{item}}</span>
        </div>
      </div>
      <div class="area">
        <div class="title">按字母排序</div>
        <div class="letter" >
          <span class="letter_ border-topbottom" v-for="item of brr" :key="item">{{item}}</span>
        </div>
      </div>
      <div class="area"  v-for="item of brr">
        <div class="title">{{item}}</div>
        <div class="letter" >
          <span class="letter_ border-topbottom" v-for="i of cityarr[item]"  :key="item.id" @click="handleCityClick(i.name)">{{i.name}}</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'City',
  created(){
    this.get()
  },
  data () {
    return{
      hots: ['北京', '上海', '广州', '深圳'],
      brr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      arr: [],
      cityarr: {}
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    },
    get(){
      var that = this
      this.$http.get("/anhao/v4/api/city?__t=1526434847742").then(function(res){
        var json = {};
        that.arr = res.data.data.cities
        for(var i in that.arr){
          for(var k in that.brr){
            if(that.arr[i].pinyin[0] == that.brr[k]){
              if(!json[that.brr[k]]){
                json[that.brr[k]] = [];
                json[that.brr[k]].push(that.arr[i]);
              }else{
                json[that.brr[k]].push(that.arr[i]);
              }
            }
          }
        }
        that.cityarr = json
      })
    },
  }
}
</script>

<style lang="stylus"  scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list-wrapper
    display: flex
    flex-direction: column
    .list
      flex: 1
      position: absolute
      top: .5rem
      left: 0
      right: 0
      bottom: 0
      font-size: .14rem
      .area
        overflow: hidden
        .title
          height: .4rem
          line-height: .4rem
          background: #ebebeb
          padding-left: .2rem
          color: #666
        .now
          height: .47rem
          line-height: .47rem
          font-size: .16rem
          font-weight: 900
          padding-left: .3rem
          color: #E2941A
        .hot
          display: flex
          justify-content: space-around
          height: .47rem
          line-height: .47rem
          font-size: .16rem
          color: #666
        .letter
          display: flex
          flex-wrap: wrap
          .letter_
            display: flex
            justify-content: center
            height: .45rem
            line-height: .45rem
            width: 25%
            font-size: .16rem
            color: #666
</style>
