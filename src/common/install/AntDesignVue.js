import {
  Icon,
  Button,
  Row,
  Col,
  Space,
  Divider,
  BackTop,
 } from 'ant-design-vue';

 const AntDesignVue = {}
AntDesignVue.install = function (Vue) {
  // General
  Vue.component('app-button', Button);
  Vue.component('app-icon', Icon);

  // Grid 栅格
  Vue.component('app-row', Row);
  Vue.component('app-col', Col);

  // Space 间距
  Vue.component('app-space', Space);
  // Divider 分割线
  Vue.component('app-divider', Divider);

  //BackTop 回到顶部
  Vue.component('app-back-top', BackTop);
}

export default AntDesignVue