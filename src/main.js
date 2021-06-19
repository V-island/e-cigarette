import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import installCommon from "@/common"
import vuetify from '@/common/install/VuetifyVue'

Vue.config.productionTip = false

// 注册组件
Vue.use(installCommon);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
