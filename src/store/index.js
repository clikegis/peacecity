/**
 * @author cy
 * */

/*引入vuex插件*/
import Vuex from 'vuex'

/*引入Vue*/
import Vue from 'vue'

/*将插件添加到Vue上*/
Vue.use(Vuex);

/*初始化Vuex配置项*/
const actions = {
};

const mutations = {

};

const state = {
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
};

const getters = {
    selectYear(state){
        return state.selectDay.split("-")[0];
    },
    selectMonthAndDay(state){
        let [year,month,day] = state.selectDay.split("-");
        return month+"-"+day;
    }
};

/*导出store仓库*/
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});

