<template>
  <div id="NoiseMap">
    <!--加载动画-->
    <div class="loadAnimationContainer">
      <!--加载圆点-->
      <div class="loadDotContainer">
        <div class="dot"></div>
        <div class="dot dot2"></div>
        <div class="dot"></div>
      </div>
      <!--加载描述-->
      <div class="loadDescription">
        {{loadDescription}}
      </div>
    </div>
      <!--地图视图-->
      <div id="MapView">
        <!--时间轴-->
        <div class="TimeLineContainer">
          <Timeline></Timeline>
        </div>
      </div>
  </div>
</template>

<script>
import {loadModules} from 'esri-loader'
import jquery from "jquery"
import Timeline from "../components/NoiseMapComponents/Timeline";
export default {
  name: "NoiseMap",
  components:{
    Timeline
  },
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
          basemap:{
            portalItem: {
              id: "4f2e99ba65e34bb8af49733d9778fb8e"
            }
          }
        });

        let view = new MapView({
          map:map,
          center:[-74.0,40.66],
          zoom:12,
          container:'MapView'
        }).on("layerview-create", ()=> {//视图加载完毕
          // this.isLoading = false;
          this.loadDescription = '加载成功！';
          jquery('.loadAnimationContainer').fadeOut(1000);
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
      loadDescription:'地图正在赶来途中~'
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
  left: 0;
  top: 0;
  position: absolute;
}

/*加载动画样式*/
.loadAnimationContainer{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgb(34,36,38);
}

.loadDotContainer{
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 40%;
  display: flex;
  height: 30px;
  width: 20vw;
  justify-content: space-around;
}

.dot{
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: #00F5FF;
}

.dot:first-child{
  animation-delay: .1s;
  animation-name: jump;
  animation-duration: .3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.dot2{
  animation-delay: .2s;
  animation-name: jump;
  animation-duration: .3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.dot:last-child{
  animation-delay: .3s;
  animation-name: jump;
  animation-duration: .3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.loadDescription{
  position: absolute;
  width: 100%;
  left: 0;
  top: 45%;
  text-align:center;
  color: white;
  font-weight: bolder;
  font-size: 3rem;
}

@keyframes jump {
  to{
    transform: translateY(-2vh);
  }
}

/*时间轴位置*/
.TimeLineContainer{
  position: absolute;
  bottom:2vh;
  left: 5vw;
  right: 0;
}
</style>