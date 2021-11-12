<template>
  <div id="NoiseMap">
      <div id="MapView">

      </div>
  </div>
</template>

<script>
import {loadModules} from 'esri-loader'
export default {
  name: "NoiseMap",
  mounted() {
    this.createdMapView();
  },
  methods:{
    createdMapView(){
      const option = {
        url: 'https://js.arcgis.com/4.21/',
        css: "https://js.arcgis.com/4.21/esri/themes/dark/main.css"
      };
      loadModules(["esri/Map","esri/views/MapView","esri/layers/WMSLayer"],option).then(([Map,MapView,WMSLayer])=>{
        let map = new Map({
          basemap:'satellite'
        });

        let view = new MapView({ // eslint-disable-line no-unused-vars
          map:map,
          center:[-74.0,40.66],
          zoom:12,
          container:'MapView'
        });


      }).catch((err)=>{
        console.log(err);
      })
    },
    testMethod(){
      console.log(123);
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#NoiseMap{
  height: 100%;
  width: 100%;
  position: relative;
}
#MapView{
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>