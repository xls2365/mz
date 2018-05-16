<template>
    <div class="home">
       <banner></banner>
       <film-box type="now-playing"></film-box>
       <film-box type="coming-soon"></film-box>
    </div>
</template>
<script>
import Banner from "./Banner"
import FilmBox from "./FilmBox"
export default {
    name:"Home",
    data(){
        return {
           
        }
    },
    components:{Banner,FilmBox}
}
</script>
<style lang="stylus" scoped>
   .home{
       padding-top:50px;
   }
</style>