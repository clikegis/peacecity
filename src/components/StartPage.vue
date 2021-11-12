<template>
<div id="stagePage">
  <!--标题-->
  <div id="Title">
    Choose 2D or 3D
  </div>

  <!--  2维地图选项 -->
  <div id="NoiseMap2DOption">

  </div>

  <!--  3维地图选项 -->
  <div id="NoiseMap3DOption">

  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "StartPage",

}
</script>

<style scoped>
#stagePage{
  width: 100%;
  height: 100%;
  background: #000;
}

#Title{
  width: 85%;
  margin: 0 auto;
  text-align: center;
  /*font-family: 'Comfortaa', cursive;*/
  font-size: 5.6rem;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  cursor: pointer;
}


</style>