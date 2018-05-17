<template>
  <div id="app">
    <app-header ></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from "@/components/home/AppHeader"
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{AppHeader}
}
</script>

<style>

</style>
