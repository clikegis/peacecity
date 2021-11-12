<template>
  <div id="app">
    <!--选择位置-->
    <div id="choosePage" v-if="hasChoose">
      <StartPage></StartPage>
    </div>
    <!--地图页面位置-->
    <div id="NoiseMapContainer" v-else>

    </div>
  </div>
</template>

<script>
import StartPage from "./components/StartPage";
export default {
  name: 'App',
  components: {
    StartPage
  },
  data(){
    return{
      hasChoose:true,/*是否选择二维还是三维*/
    }
  }
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  position: relative;
}
/*地图容器*/
#choosePage,#NoiseMapContainer{
  height: 100%;
  width: 100%;
}
#choosePage{

}
</style>
