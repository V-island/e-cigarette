<template>
  <section>
    <BannerPreview :options='banner'/>
    <div class="page_module">
      <div class="container_header wow fadeInUp">
        <p class="title">产品</p>
      </div>
      <div class="container_category wow fadeInUp">
        <router-link class="active" to="/product">
          <span>电子烟主机</span>
        </router-link>
        <router-link to="/product">
          <span>雾化器及配件</span>
        </router-link>
      </div>
      <div class="container_content" >
        <template v-for="(item, index) in productList">
          <ProductItem class="wow fadeInUp" :data-wow-delay="`${index/10}s`" :key="item.id" :options="item"></ProductItem>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import WowMixin from "@mixins/WowMixin";
  import BannerPreview from '../components/BannerPreview.vue'
  import ProductItem from '../components/ProductItem.vue'
  export default {
    mixins: [WowMixin],
    components: {
      BannerPreview,
      ProductItem
    },
    data() {
      return {
        banner: {
          name: '产品',
          url: './banner/banner_product.png'
        },
        productList: [{
          id: '202106001',
          title: '青禾1号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product01.png'
        }, {
          id: '202106002',
          title: '青禾2号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product02.png'
        }, {
          id: '202106003',
          title: '青禾3号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product03.png'
        }, {
          id: '202106004',
          title: '青禾4号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product04.png'
        }]
      }
    },
  }
</script>

<style lang="less" scoped>

</style>