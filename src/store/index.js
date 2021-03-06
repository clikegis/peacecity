//引入vuex
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)

//用于响应组件中的动作
const actions={}
//用于操作数据
const mutations={}
//用于存储数据
const state={
    currentDay:'',
    currentHM:'',
    selectDay:'2012-4-12',
    selectHM:'03 AM',
    hoursArr:(function (){
        let arr = [];
        for(let i = 0;i <= 24;i++){
            arr.push(i);
        }
        return arr;
    })(),
    type:['t1','t2','t3','t4'],//噪声种类名称
    colorArr:['#00FFFF','#00EEEE','#00CDCD','#008B8B'],//对应噪声种类的颜色
    TestData:[
        {
            name:'t1',
            data:[60,15,6,10,6,10,12,15,13,18,45,80],//按照regionCode的顺序
            time:null
        },
        {
            name:'t2',
            data:[82,22,16,25,14,16,16,20,19,20,80,100],
            time:null
        },
        {
            name:'t3',
            data:[93,32,22,32,12,20,20,28,23,27,88,120],
            time:null
        },
        {
            name:'t4',
            data:[105,42,24,50,22,22,20,28,25,28,100,140],
            time:null
        },
        // {
        //     name:'PrivateCartingNoise',
        //     data:[111,50,40,65,24,26,24,33,30,36,120,150],
        //     time:null
        // },
        // {
        //     name:'LoudTelevison',
        //     data:[112,52,50,80,27,28,26,36,33,40,123,150],
        //     time:null
        // },
    ],
    RegionCodeArr:[0,1,2,3,4,5,6,7,8,9,10,11],
}


const getters = {
    selectYear(state){
       let [year,month,day] = state.selectDay.split('-');
       return year;
    },
    selectMonthAndDay(state){
        let [year,month,day] = state.selectDay.split('-');
        return month+' - '+day;
    }
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

