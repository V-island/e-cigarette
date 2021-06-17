<template>
  <section>
    <BannerPreview :options='banner' type="small"/>
    <div class="page_module">
      645
    </div>
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
          name: '产品详情',
          url: './banner/banner_product_detail.png'
        }
      }
    },
  }
</script>

<style lang="less" scoped>

</style>