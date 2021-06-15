require('vue-ionicons/ionicons.css')
import IosSearchIcon from 'vue-ionicons/dist/ios-search.vue'
import IosArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue'
import IosArrowForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue'

const IoniconsVue = {}
IoniconsVue.install = function (Vue) {
  Vue.component('icon-ios-search', IosSearchIcon);
  Vue.component('icon-ios-arrow-back', IosArrowBackIcon);
  Vue.component('icon-ios-arrow-forward', IosArrowForwardIcon);
}

export default IoniconsVue