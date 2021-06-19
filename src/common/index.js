import VueRouter from "vue-router";

// 设置其他框架/组件
import installIoniconsVue from "./install/IoniconsVue";
import VuetifyVue from './install/VuetifyVue';
import Scrollspy from 'vue2-scrollspy';

import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';

const Common = {}
Common.install = function (Vue) {
  // 注册Vue基础组件
  Vue.use(VueRouter);

  // 注册ionicons
  Vue.use(installIoniconsVue);

  // 注册Vuetify
  Vue.use(VuetifyVue);

  // 注册vue2-scrollspy
  Vue.use(Scrollspy);
}
export default Common

