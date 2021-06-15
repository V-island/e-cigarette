import VueRouter from "vue-router";

// 设置其他框架/组件
import installAntDesignVue from "./install/AntDesignVue";
import installIoniconsVue from "./install/IoniconsVue";

import 'font-awesome/css/font-awesome.min.css';

const Common = {}
Common.install = function (Vue) {
  // 注册Vue基础组件
  Vue.use(VueRouter);

  // 注册ant-design-vue
  Vue.use(installAntDesignVue);

  // 注册ionicons
  Vue.use(installIoniconsVue);
}
export default Common
