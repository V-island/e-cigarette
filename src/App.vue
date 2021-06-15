<template>
  <div id="app" class="layout-wrapper">
    <Navbar class="layout-header"/>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <Footer class="layout-footer"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="less">
.layout-wrapper{
  min-height: 100vh !important;
  transition: margin-left 0.2s;
}
.layout-content{
  padding-top: 82px;
  min-height: ~'calc(100vh - 320px)';
  color: @md-blue-grey-900;
  // background-color: @content-bg;
}
.layout-footer{
  background-color: @footer-bg;
}
</style>
