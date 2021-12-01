<template>
<div class="NoiseChart" >
  <div class="trend-chart" style="width: 400px;height: 400px" ref="trend_ref">

  </div>
</div>
</template>

<script>
export default {
  name: "NoiseChart",
  data(){
    return{
      chartInstance:null,
      allData:null,

      hoursArr:this.$store.state.hoursArr,

      TestData:this.$store.state.TestData,

      RegionCodeArr: this.$store.state.RegionCodeArr
    }
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize',this.screenAdapter)
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize',this.screenAdapter)
  },
  methods:{
    //初始化表格设置
    initChart(){
      this.chartInstance=this.$echarts.init(this.$refs.trend_ref)
      const initOption={
        xAxis: {
          type:'category',
          axisLine: {
            lineStyle: {
              color: "#FFFDFE",
            }
          }
        },
        yAxis: {
          type:'value',
          axisLine: {
            lineStyle: {
              color: "#FFFDFE",
            }
          }
        },
      }
      this.chartInstance.setOption(initOption)
    },
    getData(){
      //获取数据，更新图表
      this.updateChart()
    },
    //更新数据后更新表格
    updateChart(){
      // //横轴时间
      // const timeArr=this.hoursArr
      //横轴地区
      const regionArr=this.RegionCodeArr
      //折线数组
      const seriesArr=this.TestData.map(item=>{
        return{
          type:'bar',
          stack: true,
          name:item.name,
          data:item.data,
          // label: {
          //   show: true
          // },
          emphasis: {
            focus: 'series'
          },

        }
      })
      console.log(seriesArr)
      //图例
      const legendArr=this.TestData.map(item=>{
        return item.name
      })

      const dataOption={
        tooltip: {
          trigger: 'axis'
        },
        xAxis:{
          data:regionArr,
        },
        legend:{
          data:legendArr,
          textStyle: { color: "#FFFDFE" },
        },
        series:seriesArr,
        dataZoom:{
          realtime:true, //拖动滚动条时是否动态的更新图表数据
          height:25,//滚动条高度
          start:0,//滚动条开始位置（共100等份）
          end:50//结束位置（共100等份）
        }

      }
      this.chartInstance.setOption(dataOption)
    },
    //图表自适应屏幕显示的变动
    screenAdapter(){
      const adapterOption={}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped>
.NoiseChart{
  display: flex;
  background-color: #3C3F41;
}
</style>