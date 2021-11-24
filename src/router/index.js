import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import NoiseMap from "../views/NoiseMap";
import StartPage from "../views/StartPage";

export default new Router({
    routes:[
        {
            path:'/StartPage',
            name:'StartPage',
            component:StartPage
        },
        {
            path:'/NoiseMap2D',
            name:'NoiseMap2D',
            component:NoiseMap
        },
        {
            path:'/',
            redirect:"/StartPage"
        },
    ]
});