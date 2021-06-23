<template>
  <section>
    <BannerPreview :options='banner' />
    <div class="page_module">
      <v-container>
        <div class="container_header wow fadeInUp">
          <p class="title">产品</p>
        </div>
        <div class="container_category wow fadeInUp">
          <a v-for="(item, index) in ['电子烟主机', '雾化器及配件']" :key="index" :class="{active: activeIndex === index}" @click.stop="activeIndex = index">{{item}}</a>
          <!-- <router-link class="active" to="/product">
            <span>电子烟主机</span>
          </router-link>
          <router-link to="/product">
            <span></span>
          </router-link> -->
        </div>
        <div class="container_content">
          <v-row>
            <template v-for="(item, index) in list[activeIndex]">
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
import BannerPreview from "../components/BannerPreview.vue";
import ProductItem from "../components/ProductItem.vue";

export default {
  mixins: [WowMixin],
  components: {
    BannerPreview,
    ProductItem,
  },
  data() {
    return {
      banner: {
        name: "产品",
        url: "./banner/banner_product.png",
      },
      activeIndex: 0,
      list: [
        [
          {
            id: "202106001",
            title: "青禾1号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product1.png",
          },
          {
            id: "202106002",
            title: "青禾2号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product2.png",
          },
          {
            id: "202106003",
            title: "青禾3号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product3.png",
          },
          {
            id: "202106004",
            title: "青禾4号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product4.png",
          },
          {
            id: "202106005",
            title: "青禾5号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product5.png",
          },
          {
            id: "202106006",
            title: "青禾6号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product6.png",
          },
          {
            id: "202106007",
            title: "青禾7号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product7.png",
          },
          {
            id: "202106008",
            title: "青禾8号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product8.png",
          },
          {
            id: "202106009",
            title: "青禾9号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product9.png",
          },
          {
            id: "202106010",
            title: "青禾10号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product10.png",
          },
          {
            id: "202106011",
            title: "青禾11号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product11.png",
          },
        ],
        [
          {
            id: "202106001",
            title: "青禾1号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product01.png",
          },
          {
            id: "202106002",
            title: "青禾2号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product02.png",
          },
          {
            id: "202106003",
            title: "青禾3号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product03.png",
          },
          {
            id: "202106004",
            title: "青禾4号",
            description: "清新  健康  激情  热爱",
            imgUrl: "./product/product04.png",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.container_content {
  margin-top: 30px;
}
</style>