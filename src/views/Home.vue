<template>
<section>
  <div class="banner">
    <banner-slider />
  </div>
  <div class="product module">
    <div class="product_container" :style="product.style">
      <div class="container_header">
        <p class="title">产品</p>
        <p class="subtitle">PRODUCT DESIGN</p>
      </div>
      <div class="container_content">
        <VueSlickCarousel v-bind="product.settings">
          <template v-for="item in product.productList">
            <ProductItem :key="item.id" :options="item" ></ProductItem>
          </template>
        </VueSlickCarousel>
        <router-link class="more-link" to="/product">
          <span style="color: rgb(242, 242, 242);">MORE</span>
        </router-link>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import BannerSlider from '../components/BannerSlider.vue'
import ProductItem from '../components/ProductItem.vue'

// image
import product_bg from '@/assets/home/product_bg.png'

export default {
  components: {
    BannerSlider,
    VueSlickCarousel,
    ProductItem
  },
  data() {
    return {
      product: {
        style: {
          backgroundImage: `url(${product_bg})`
        },
        settings: {
          dots: true,
          focusOnSelect: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          touchThreshold: 5
        },
        productList: [
          {
            id: '202106001',
            title: '青禾1号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product01.png'
          },{
            id: '202106002',
            title: '青禾2号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product02.png'
          },{
            id: '202106003',
            title: '青禾3号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product03.png'
          },{
            id: '202106004',
            title: '青禾4号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product04.png'
          },{
            id: '202106005',
            title: '青禾5号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product01.png'
          },{
            id: '202106006',
            title: '青禾6号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product02.png'
          },{
            id: '202106007',
            title: '青禾7号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product03.png'
          },{
            id: '202106008',
            title: '青禾8号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product04.png'
          },
        ]
      }
    }
  },
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
}

.product {
  background-color: #18191c;
  padding: 90px 0 130px;

  .product_container{
    .background-imager();
    background-position: 200px;
    padding: 20px 80px;

    .container_header{
      text-align: center;
      margin-bottom: 100px;

      .title {
        color: #fff;
        font-size: 24px;
        margin: 0 auto;
        position: relative;
      }
      .subtitle {
        color: #666;
        margin-top: 4px;
        font-size: 13px;
        text-transform: uppercase;
      }
    }
    .container_content{
      text-align: center;

      .more-link{
        width: 300px;
        margin: 50px auto 0;
        color: @brand-primary;
      }
    }

    /deep/ .slick-slider {

      &:hover{
        .slick-prev, .slick-next{
          opacity: 1;
        }
        .slick-prev{
          left: -40px;
        }
        .slick-next{
          right: -30px;
        }
      }
      .slick-slide{
        padding: 0 15px 20px 0;
      }
      .slick-prev, .slick-next{
        margin-top: -20px;
        outline: 0;
        width: 40px;
        height: 40px;
        z-index: 2;
        background: rgba(0,0,0,.5);
        transition: all ease-out .3s;
        opacity: 0;

        &::before{
          font: normal normal normal 14px/1 FontAwesome;
          font-size: 24px;
        }
        &:hover{
          background: @brand-primary;
        }
      }
      .slick-prev{
        left: -100px;

        &::before{
          content: "\f104";
        }
      }
      .slick-next{
        right: -100px;

        &::before{
          content: "\f105";
        }
      }
      .slick-dots li{
        width: 50px;
        height: 3px;
        button{
          width: 100%;
          height: 100%;
          padding: 0;
          background: #3c3c3f;
          &::before{
            content: none;
          }
        }
        &.slick-active{
          button{
            background: @brand-primary;
          }
        }
      }
    }
  }
}
</style>
