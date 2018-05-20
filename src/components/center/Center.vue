<template>
  <div class="center">
    <div class="header">
      <img src="https://static.maizuo.com/pc/v5/usr/default/maizuomoren66.jpg" class="personage" />
      <div class="details">
        <p class="userName">手机用户<span>9372</span></p>
        <p class="userId">ID:<span>219372239</span></p>
        <router-link to="/" class="quit">退出</router-link>
      </div>
    </div>
    <div class="list-wrapper" :class="item.class" v-for="item of list" :key="item.id">
      <div class="list">
        <div class="title">
          <span class="iconfont icon" :class='item.icon' :style="{background:item.bgcolor}"></span>
          <span>{{item.name}}</span>
        </div>
        <div class="number">
          <span class="num">{{item.num}}</span>
          <span>{{item.unit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Center',
    data () {
      return {
        list: [
          {'id':'1', 'bgcolor':'#7BCDCC', 'unit':'张 >', 'num':0, 'icon':'icon-wodedingdan', 'name':'影票订单'},
          {'id':'2', 'bgcolor':'#BBCEA5', 'unit':'张 >', 'num':0, 'icon':'icon-dengdai', 'name':'影票代付订单'},
          {'id':'3', 'bgcolor':'#95C0EA', 'unit':' >', 'icon':'icon-shangcheng', 'name':'商城订单'},
          {'id':'4', 'bgcolor':'#FFCC9E', 'unit':'张 >', 'num':0, 'icon':'icon-youhuijuan', 'class':'class border-bottom', 'name':'我的现金劵'},
          {'id':'5', 'bgcolor':'#FAA0B5', 'unit':'元 >', 'num':0, 'icon':'icon-yue', 'class':'class border-bottom', 'name':'账号余额'},
          {'id':'6', 'bgcolor':'#A6E5ED', 'unit':'张 >', 'num':0, 'icon':'icon-wodedingdan', 'class':'class', 'name':'我的卖座卡'},
          {'id':'7', 'bgcolor':'#A4C9E5', 'unit':' >', 'icon':'icon-shezhi', 'name':'设置'}
        ]
      }
    },
    method: {

    }
  }
</script>

<style lang="stylus" scoped>
  .center
    flex: 1
    position: absolute
    top: .5rem
    left: 0
    right: 0
    bottom: 0
    font-size: .14rem
    background: #f6f6f6
    .header
      display: flex
      align-items: center
      height: 1.52rem
      padding-left: .4rem
      background: #303030
      .personage
        width: .92rem
        height: .92rem
        border-radius: 50%
    .details
      width: .88rem
      height: .63rem
      margin-left: .15rem
      .userName
        color: #fff
        line-height: .2rem
      .userId
        color: #fff
        line-height: .2rem
      .quit
        line-height: .2rem
        text-decoration: underline
        color: #F9B87D
    .list-wrapper
      height: .6rem
      margin: .15rem 0
      background: #fff
      .list
        display: flex
        height: 100%
        margin: 0 .15rem
        justify-content: space-between
        align-items: center
        .icon
          display: inline-block
          width: .25rem
          height: .25rem
          line-height: .25rem
          margin-right: .08rem
          text-align: center
          border-radius: 50%
          background: #7BCDCC
          color: #fff
        .num
          color: #F7E1C4
    .class
      margin: 0
      border-bottom: 1px solid #EAEAEA
</style>
