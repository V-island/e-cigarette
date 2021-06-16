<template>
  <section>
    <BannerPreview :options='banner'/>
  </section>
</template>

<script>
  import WowMixin from "@mixins/WowMixin";
  import BannerPreview from '../components/BannerPreview.vue'
  export default {
    mixins: [WowMixin],
    components: {
      BannerPreview
    },
    data() {
      return {
        banner: {
          name: '招商',
          url: './banner/banner_merchants.png'
        }
      }
    },
  }
</script>

<style lang="less" scoped>

</style>