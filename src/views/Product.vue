<template>
  <section>
    <BannerPreview :options='banner'/>
    <div class="page_module">
      <v-container>
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
          <v-row>
            <template v-for="(item, index) in productList">
              <v-col :key="item.id" cols="12" xs="6" md="6" lg="3" xl="3" style="padding: 0 15px 20px 0;">
                <ProductItem class="wow fadeInUp" :data-wow-delay="`${index/10}s`" :options="item"></ProductItem>
              </v-col>
            </template>
          </v-row>
        </div>
      </v-container>
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
.container_content{
  margin-top: 30px;
}
</style>