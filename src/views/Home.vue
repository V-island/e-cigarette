<template>
  <section>
    <div class="banner">
      <BannerSlider/>
    </div>
  </section>
</template>

<script>
  import BannerSlider from '../components/BannerSlider.vue'

  export default {
    components: {
      BannerSlider
    }
  }
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
}
</style>