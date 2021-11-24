<template>
<div id="stagePage" style="background-image:url(https://images.unsplash.com/photo-1576439564014-f4b336956d59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);background-size: cover">
  <!--标题-->
  <div id="Title">
    <div>Choose</div>
    <div>2D or 3D</div>
  </div>

  <!--说明文字-->
  <div class="descriptionBox">
    <u>Select one to enter the New York Noise Map</u>
  </div>

  <!--  2维地图选项 -->
  <div id="optionContainer">
    <!--  2维地图选项 -->
    <div id="NoiseMap2DOption" class="card">
      <div class="cardBackgroundImg" @click="getInto2DMap" :class="imgClass[0]" @mouseover="becomeBlur(1)" @mouseleave="becomeClear(1)" style="background-image:url(https://images.unsplash.com/photo-1587216715306-9773155d0209?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80)">

      </div>
      <div class="cardDescription">NewYork<br> NoiseMp<br><br> &nbsp;&nbsp;&nbsp;&nbsp;2D </div>
    </div>

    <!--  3维地图选项 -->
    <div id="NoiseMap3DOption" class="card">
      <div class="cardBackgroundImg" @click="getInto3DMap" :class="imgClass[1]" @mouseover="becomeBlur(0)" @mouseleave="becomeClear(0)" style="background-image:url(https://images.unsplash.com/photo-1506383631675-0b110111327b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80)">

      </div>
      <div class="cardDescription">NewYork<br> NoiseMp<br><br> &nbsp;&nbsp;&nbsp;&nbsp;3D </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "StartPage",
  data(){
    return{
      imgClass:['imgClear','imgClear']
    }
  },
  methods:{
    /*动态添加类*/
    becomeClear(index){
      this.imgClass.splice(index,1,'imgClear');
      // this.imgClass.splice(1,1,'imgClear');
    },
    becomeBlur(index){
      this.imgClass.splice(index,1,'imgMoHu');
      // this.imgClass.splice(1,1,'imgMoHu');
    },
    /*进入2D/3D地图*/
    getInto2DMap(){
      // alert('功能待开发');
      this.$router.replace('/NoiseMap2D');
    },
    getInto3DMap(){
      alert('功能开发中...');
    },
  }
}
</script>

<style scoped>
#stagePage{
  width: 100vw;
  height: 100vh;
  /*background-image: linear-gradient(*/
  /*    15deg, #0f4667 0%, #2a6973 150%);*/
  position: relative;
}

/*设置标题样式*/
#Title{
  padding-top: 2vh;
  text-align: center;
  color: white;
  font-size: 10vh;
  font-family: 'Montserrat', sans-serif;
  animation-name:changeColor;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

#Title>div:nth-child(2){
  font-size: 6vh;
}

/*设置选项卡样式*/
#optionContainer{
  margin-top: 20vh;
  padding: 2px;
  height: 60vh;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
#optionContainer>div{
  width:23vw ;
  height: 60vh;
}

#optionContainer>div:first-child{
  /*background: greenyellow;*/
}
#optionContainer>div:last-child{
  /*background: brown;*/
}

.card{
  position: relative;
}

.cardBackgroundImg{
  width: 100%;
  height: 100%;
  border-radius: 5%;
  transition: all .5s;
  background-size: cover;
}

.cardBackgroundImg:hover{
  transform: scale(1.05);
  cursor: pointer;
}

.imgClear{
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
}

.imgMoHu{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.cardDescription{
  color: white;
  position: absolute;
  top: 5%;
  left: 5%;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: bolder;
}

/*设置描述样式*/
@keyframes changeColor {
  from{
    color:white
  }
  50%{
    color: #FFEBCD;
  }
  to{
    color: #FFDAB9;
  }
}
.descriptionBox{
  color: antiquewhite;
  position: absolute;
  width: 100vw;
  top: 25vh;
  font-size: 2vw;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  animation-name:changeColor;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

</style>