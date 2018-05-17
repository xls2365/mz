<template>
     <div><!--v-for="item in arr" :key="item.id" -->
        <li v-for="item in filmarr" :key="item.id">
            <div>
                <div class="imgbox">
                    <img width="100%" :src="item.cover.origin"  alt="">
                </div>
                <div class="titlebox">
                    <div class="left">
                        <h1>
                            {{item.name}}
                        </h1>
                        <span>
                            {{item.cinemaCount}}家影院上映{{item.watchCount}}人观看
                        </span>
                    </div>
                    <div class="right">
                        {{item.grade}}
                    </div>
                </div>
            </div>
        </li>
        
    </div>
</template>
<script>
export default {
    name:"Flim", 
    props:["filmarr"],
    created(){
       
    },
   
}
</script>
<style scoped>
    li{
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
        cursor: pointer;
    }
    .imgbox{
        max-width: 100%;
        height: auto;
    }
    .titlebox{
        height:60px;
    }
    .left{
        float:left;
        width:84%;
        height: 50px;
        padding-right: 0;
        padding-top: 13px;
        padding-left: 28px;
    }
    .right{
        float:left;
        width: 16%;
        text-align: center;
        line-height: 50px;
        color:red;
    }
    h1{
        font-size: 12px;
        line-height: 15px;
        user-select: text;
    }
    span{
        font-size: 10px;
        color:#a8a8a8;
    }
</style>