<template>
  <div class="TimeLine">
    <!--播放按钮-->
    <div class="playButtonContainer">
      <button class="playBtn iconfont" :class="playBtnIcon" @click="startPlay"></button>
    </div>

    <!--时间界面-->
    <div class="chooseTimeContainer">
      <div class="DaySpan timeDisplay" title="点击选择日期">
        <div>{{selectYear}}</div>
        <div>{{selectMonthAndDay}}</div>
      </div>
      <div class="HMSSpan timeDisplay" title="点击选择时间">{{selectHM}}</div>
    </div>

    <!--时间轴主体-->
    <div class="timeLineContainer">
      <!--中间穿插线线-->
      <div class="oneLine">
        <!--中间荧光轴-->
        <div class="lightLine">

        </div>
      </div>
      <!--24小时时间点-->
      <div class="hoursContainer">
          <div class="singeHourContainer" v-for="(hour,index) in hoursArr" :key="index">
            <div class="singeHour" :title="hour.toString()+':00'">

            </div>
          </div>
      </div>
      <!--下方时间-->
      <div  class="hoursDescriptionsContainer">
        <div class="singleHourDescription" v-for="(hour,index) in hoursArr" :key="index" v-if="index%12==0">
          {{hour+":00"}}
        </div>
      </div>
    </div>

    <!--上一天、下一天按钮-->
    <div class="changeDayContainer" title="点击切换日期">
    <!--前一天按钮-->
      <button class="iconfont changeDayBtn lastday icon-xiangzuo"></button>
    <!--后一天按钮-->
      <button class="iconfont changeDayBtn nextBtn icon-xiangyou"></button>
    </div>

  </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
export default {
  name: "Timeline",
  data(){
    return{
        playBtnIcon:"icon-24gf-play",
    }
  },
  computed:{
    ...mapState(['currentDay','currentHM','selectDay','selectHM','hoursArr']),
    ...mapGetters(['selectYear','selectMonthAndDay']),
  },
  methods:{
    startPlay(){
     this.playBtnIcon = this.playBtnIcon=="icon-24gf-play"?"icon-zanting":"icon-24gf-play";
    }
  },
  mounted(){
      jquery('.singeHour').click(function (){
        jquery('.singeHour').removeClass('clickHour');
        $(this).toggleClass('clickHour');
        console.log($(this).position());
        $('.lightLine').animate({
            width:$(this).position().left
        },300);
      });
  }
}
</script>

<style scoped>
.TimeLine{
  width: 90vw;
  height: 8vh;
  display: flex;
}

/*设置模块位置*/
.playButtonContainer{
  height: 10vh;
  width: 5vw;
}
.chooseTimeContainer{
  height: 10vh;
  width: 5vw;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-right: none;
}
.timeLineContainer{
  height: 10vh;
  width: 75vw;
  position: relative;
  border: solid 2px white;
  border-right: none;
  border-left: none;
  transition: all .3s;
  box-sizing: border-box;
  border-left: 2px white solid;
  border-right: 2px white solid;
}

.timeLineContainer:hover{
  background-color: #333333;
  /*opacity: 50%;*/
}

.changeDayContainer{
  height: 10vh;
  width: 5vw;
  position: relative;
}

/*设置播放按钮样式*/
.playBtn{
  display: block;
  border-radius: 0;
  width: 100%;
  height: 100%;
  font-size: 5rem;
  line-height: 5rem;
  color: #696969;
  background-color: transparent;
  transition: all .3s;
}
.playBtn:hover{
  background-color: #363636;
  color: #00F5FF;
  cursor: pointer;
}

/*设置前一天/后一天按钮样式*/
.changeDayBtn{
  width: 50%;
  height: 100%;
  border-radius: 0;
  color: #696969;
  background-color: transparent;
  transition: all .3s;
  font-weight: bolder;
  font-size: 2rem;
  text-align: center;
}

.changeDayBtn:hover{
  background-color: #363636;
  color: #00F5FF;
  cursor: pointer;
}

/*设置时间显示*/
.timeDisplay{
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 2.66vh;
  line-height: 2.66vh;
  cursor: pointer;
  transition: all .5s;
}
.timeDisplay:hover{
  background-color: #3a6692;
}
.DaySpan{
  height: 66%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.HMSSpan{
  border-top: solid 1px white;
  height: 33%;
}

/*时间轴样式*/
.oneLine{
  width: 100%;
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: 0.4vh;
  background-color: #8B7355;
}
.lightLine{
    width: 0;
    height: 100%;
    background-image: linear-gradient(to right , #7A88FF, #7AFFAF);
}
.hoursContainer{
  position: absolute;
  width: 100%;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: 4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.singeHourContainer{
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.singeHour{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  transition: .5s all;
  background: linear-gradient(45deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%; /*背景大小设置为原来的300% 这样背景看着不会太刻板 */
}

.singeHour::before {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  border-radius: 25px;
  background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  z-index: -1;
}
.singeHour:hover{
  animation: hoverBtn 2s infinite;
  transform: scale(1.5);
  cursor: pointer;
}

@keyframes hoverBtn {
  100% {
    background-position: 300%;
  }
}

.clickHour{
  transform: scale(1.8);
}

.singeHour:hover::before {
  filter: blur(10px);
  animation: hoverBtn 2s infinite;
}

.hoursDescriptionsContainer{
  position: absolute;
  width: 100%;
  bottom: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.singleHourDescription{
  width: 3.5rem;
  height: 1.5rem;
  font-weight: bolder;
  color: whitesmoke;
  text-align: center;
  font-size: 1rem;
}
</style>