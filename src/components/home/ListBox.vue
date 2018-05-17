<template>
    <div class="boxlist">
        <div class="btn">
            <div class="left" :class="{choose:type=='now-playing'}" @click="now">正在热映</div>
            <div class="right" :class="{choose:type=='coming-soon'}" @click="coming">即将上映</div>
        </div>
        <list :type='type'></list>
    </div>
</template>
<script>
import List from "./List"
export default {
    name:"ListBox",
    data(){
        return {
            type:"coming-soon"
        }
    },
    methods:{
        now(){
            this.type="now-playing"
        },
        coming(){
            this.type="coming-soon"
        }
    },
    components:{
        List
    }
}
</script>
<style lang="stylus" scoped>
   .boxlist{
       padding:50px 20px 0;
   }
   .btn{
        height: 46px;
        margin: 0 auto;
        border-bottom: solid #fe6e00 1px;
   }
   .left,.right{
        float: left;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #6a6a6a;
        cursor: pointer;
   }
   .choose{
        color: #fe6e00;
        border-bottom: solid;
   }
   
</style>
