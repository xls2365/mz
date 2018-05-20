<template>
  <div class="register">
    <form action="Register_submit" method="get" class="form">
      <div class="inp-wrapper">
        <input class="inp" type="text" placeholder="输入手机号" v-model="inputPhone" autofocus>
        <span class="borde"></span>
        <span class="send" v-show="sendShow" @click="handleSendClick" v-text="send">{{send}}</span>
        <i class="triangle" v-show="sendShow"></i>
      </div>
      <div class="inp-wrapper">
        <input class="inp" type="text" placeholder="输入验证码" v-model="inputCode">
        <span class="borde"></span>
        <span class="hint" v-show="phoneTrue">请正确的输入手机号</span>
        <span class="hint" v-show="phoneEmpty">手机号不能为空</span>
        <span class="hint" v-show="passEmpty">密码不能为空</span>
      </div>
      <div class="btn-wrapper"><input class="btn" type="button" value="登录" @click="handleBtnClick"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      send: '发送验证码',
      inputPhone: '',
      inputCode: '',
      sendShow: false,
      phoneTrue: false,
      phoneEmpty: false,
      passEmpty: false,
    }
  },
  methods: {
    handleSendClick () {
      var n = 60
      var timer = setInterval(() => {
        this.send = '重发' +'('+ n-- +')'
        if (n === 0) {
          clearInterval(timer)
          this.send = '发送验证码'
        }
      },1000)
    },
    handleBtnClick (inputPhone) {
      this.$store.dispatch('changePhone', inputPhone)
      this.phoneTrue = false
      this.phoneEmpty = false
      this.passEmpty = false
      var pattern = /^1(3|4|5|7|8)\d{9}$/
      if (pattern.test(this.inputPhone) && this.inputCode !== '') {
           this.$router.push('/center')
      } else if (this.inputPhone === '') {
        this.phoneEmpty = true
      } else if (pattern.test(this.inputPhone) && this.inputCode === '') {
        this.passEmpty = true
      } else {
        this.phoneTrue = true
      }
      //console.log(this.$store)
    },
  },
  watch: {
    inputPhone () {
      var pattern = /^1(3|4|5|7|8)\d{9}$/
      if (pattern.test(this.inputPhone)) {
        this.sendShow = true
      } else {
        this.sendShow = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register
    flex: 1
    position: absolute
    top: .5rem
    left: 0
    right: 0
    bottom: 0
    font-size: .14rem
    background: #f6f6f6
    .form
      display: flex
      flex-direction: column
      align-items: center
      margin-top: .3rem
      height:2.5rem
      .inp-wrapper
        position: relative
        margin-bottom: .3rem
        .send
          position: absolute
          right: .05rem
          bottom: .05rem
          width: .95rem
          height: .3rem
          line-height: .3rem
          text-align: center
          border-radius: .02rem
          background: #29A097
          color: #fff
        .triangle
          position:absolute
          left: 2.07rem
          top: .08rem
          height: 0px;
          width: 0px;
          border-top: .06rem solid transparent;
          border-right: .06rem solid #29A097;
          border-bottom: .06rem solid transparent
        .inp
          width: 3.13rem
          height: .34rem
          text-indent: .1rem
          font-size: .14rem
          color: #999
          background: #f6f6f6
        .hint
          position: absolute
          bottom: -.2rem
          text-indent: .1rem
          font-size: .12rem
          color: #FE8233
        .borde
          position: absolute
          bottom: 0
          display:block
          width: 3.13rem
          height: .12rem
          border: #999 solid
          border-width: 0 1px 1px 1px
      .btn-wrapper
        position: relative
        width: 3.13rem
        height: .4rem
        margin-top: .4rem
        .btn
          position: absolute
          left: 0
          right: 0
          margin: auto
          width: 1.63rem
          height: .4rem
          background: #fe8233
          border-radius: .2rem
          color: #fff
          font-size: .18rem
</style>
