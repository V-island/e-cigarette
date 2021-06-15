import Vue from 'vue'
import App from './App.vue'
import router from './router'
import installCommon from "@/common"

Vue.config.productionTip = false

// 注册组件
Vue.use(installCommon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
