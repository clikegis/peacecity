import Vue from 'vue'
import App from './App.vue'
/*引入echarts*/
import * as echarts from 'echarts';

/*引入路由*/
import router from './router'

/*引入Vuex仓库*/
import store from './store'

/*引入ui库*/
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

/*引入icon*/
import '../src/assets/icon/iconfont.css'

Vue.use(ant)

Vue.prototype.$echarts=echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
