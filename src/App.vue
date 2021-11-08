<template>
  <div id="app">
    <div id="NoiseMapContainer">
       <NoiseMap></NoiseMap>
    </div>
  </div>
</template>

<script>
import NoiseMap from "@/components/NoiseMap";
export default {
  name: 'App',
  components: {
    NoiseMap
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
#NoiseMapContainer{
  height: 100%;
  width: 100%;
}
</style>
