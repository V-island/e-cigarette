<template>
  <div id="app" class="layout-wrapper">
    <Navbar v-if="screenWidth > 900" class="layout-header"/>
    <NavbarApp v-else/>
    <div class="layout-content" :style="contentStyle">
      <router-view></router-view>
    </div>
    <Footer class="layout-footer"/>
    <OverlayModel/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import NavbarApp from './components/NavbarApp.vue'
import Footer from './components/Footer.vue'
import OverlayModel from './components/OverlayModel.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarApp,
    Footer,
    OverlayModel
  },
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,  //实时屏幕宽度
    }
  },
  computed: {
    contentStyle() {
      return {
        paddingTop: this.screenWidth > 900 ? '82px' : '56px'
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
}
</script>

<style lang="less">
.layout-wrapper{
  min-height: 100vh !important;
  transition: margin-left 0.2s;
}
.layout-content{
  min-height: ~'calc(100vh - 320px)';
  color: @md-blue-grey-900;
  // background-color: @content-bg;
}
.layout-footer{
  background-color: @footer-bg;
}
</style>
