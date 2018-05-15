<template>
    <div class="apphead">
        <div class="icon">
            <i class="fa fa-align-justify"></i>
        </div>
        <div class="move">
            卖座电影
        </div>
        <div class="login">
            <b class="fa fa-user"></b>
        </div>
        <div class="address">
            <a href="">北京</a>
            <u class="fa fa-chevron-down"></u>
        </div>
        
        
    </div>
</template>
<script>
export default {
    name:"AppHeader"
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
</style>
