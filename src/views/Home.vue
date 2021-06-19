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
          <template v-for="(item, index) in product.productList">
            <ProductItem class="wow fadeInUp" :data-wow-delay="`${index/10}s`" :key="item.id" :options="item" height="calc(100% / 4 - 15px)"></ProductItem>
          </template>
        </VueSlickCarousel>
        <router-link class="more-link" to="/product">
          <span style="color: rgb(242, 242, 242);">MORE</span>
        </router-link>
      </div>
    </div>
  </div>
  <div class="about module">
    <div class="about-info wow fadeInUp">
      <div class="container_header">
        <p class="title">关于</p>
        <p class="subtitle">about us</p>
        <span class="line"></span>
      </div>
      <p>深圳市青禾科技有限公司是一家专业从事研发、制造、销售和服务电子烟产品的科技企业。</p>
      <p>公司自成立以来，始终专注于“健康电子烟”的开发和研制，管理层及研发人员都具有电子烟行业多年从业经验，</p>
      <p>目标是向客户提供“零缺隙”的产品。公司一直奉行“诚信、创新、感恩、共赢”的方针，运用先进的管理理念。</p>
      <router-link class="more-link" to="/about">
        <span style="color: rgb(242, 242, 242);">MORE</span>
      </router-link>
    </div>
    <v-parallax class="about-preview" src="@/assets/home/about_bg.png"></v-parallax>
  </div>
  <div class="news module">
    <div class="module_container wide">
      <div class="container_header wow fadeInUp">
        <p class="title">资讯</p>
        <p class="subtitle">NEWS</p>
      </div>
      <div class="container_category wow fadeInUp">
        <router-link class="active" to="/news">
          <span>公司新闻</span>
        </router-link>
        <router-link to="/news">
          <span>行业资讯</span>
        </router-link>
        <router-link to="/news">
          <span>百科知识</span>
        </router-link>
        <router-link to="/news">
          <span>更多</span>
        </router-link>
      </div>
      <div class="container_content">
        <div class="content_wrapper">
          <div class="news-list clearfix">
            <template v-for="(item, index) in newsList">
              <NewItem class="wow fadeInUp" :data-wow-delay="`${index/10}s`" :key="item.id" :options="item"></NewItem>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="team module">
    <div class="module_container">
      <div class="container_header wow fadeInUp">
        <p class="title">核心团队</p>
        <p class="subtitle">CORE TEAM</p>
      </div>
      <div class="container_content">
        <div class="content_wrapper">
          <TeamSlider class="side" :list="teamList" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import WowMixin from "@mixins/WowMixin";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import BannerSlider from '../components/BannerSlider.vue'
import ProductItem from '../components/ProductItem.vue'
import NewItem from '../components/NewItem.vue'
import TeamSlider from '../components/TeamSlider.vue'

export default {
  mixins: [WowMixin],
  components: {
    BannerSlider,
    VueSlickCarousel,
    ProductItem,
    NewItem,
    TeamSlider
  },
  data() {
    return {
      product: {
        style: {
          backgroundImage: `url(${require('@/assets/home/product_bg.png')})`
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
        }, {
          id: '202106005',
          title: '青禾5号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product01.png'
        }, {
          id: '202106006',
          title: '青禾6号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product02.png'
        }, {
          id: '202106007',
          title: '青禾7号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product03.png'
        }, {
          id: '202106008',
          title: '青禾8号',
          description: '清新  健康  激情  热爱',
          imgUrl: './product/product04.png'
        }]
      },
      newsList: [{
        id: '202106001',
        date: '06-10',
        title: '第二届日本国际电子烟展顺利开幕',
        description: '为期三天的2021CECMOL国际电子烟展——日本展在5月23日顺利开幕，感谢所有展商、媒体、观众对本次展会给予的支持与肯定！',
        imgUrl: './news/news01.png'
      },{
        id: '202106002',
        date: '06-10',
        title: '电子烟超声波雾化器有前途吗？',
        description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
        imgUrl: './news/news01.png'
      },{
        id: '202106003',
        date: '06-10',
        title: '青禾参加全球最大电子烟展会IECIE',
        description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
        imgUrl: './news/news01.png'
      },{
        id: '202106004',
        date: '06-10',
        title: '电子烟超声波雾化器有前途吗？',
        description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
        imgUrl: './news/news01.png'
      }],
      teamList: [{
        id: '202106001',
        title: '马克',
        subtitle: '常务副总经理',
        description: '拥有24年的管理 工作和管理咨询经验，目前是战略咨询中心、人力资源咨询中心、运营管理咨询中心核心领导。',
        imgUrl: './team/team01.png'
      },{
        id: '202106002',
        title: '马克',
        subtitle: '常务副总经理',
        description: '工作和管理咨询经验，目前是战略咨询中心、人力资源咨询中心、运营管理咨询中心核心领导。',
        imgUrl: './team/team01.png'
      },{
        id: '202106003',
        title: '马克',
        subtitle: '常务副总经理',
        description: '工作和管理咨询经验，目前是战略咨询中心、人力资源咨询中心、运营管理咨询中心核心领导。',
        imgUrl: './team/team01.png'
      }]
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

  .product_container {
    .background-imager();
    background-position: 200px;
    padding: 20px 80px;

    .container_header {
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

    .container_content {
      text-align: center;

      .more-link {
        width: 300px;
        margin: 50px auto 0;
        color: @brand-primary;
      }
    }

    /deep/ .slick-slider {

      &:hover {

        .slick-prev,
        .slick-next {
          opacity: 1;
        }

        .slick-prev {
          left: -40px;
        }

        .slick-next {
          right: -30px;
        }
      }

      .slick-slide {
        padding: 0 15px 20px 0;
      }

      .slick-prev,
      .slick-next {
        margin-top: -20px;
        outline: 0;
        width: 40px;
        height: 40px;
        z-index: 2;
        background: rgba(0, 0, 0, .5);
        transition: all ease-out .3s;
        opacity: 0;

        &::before {
          font: normal normal normal 14px/1 FontAwesome;
          font-size: 24px;
        }

        &:hover {
          background: @brand-primary;
        }
      }

      .slick-prev {
        left: -100px;

        &::before {
          content: "\f104";
        }
      }

      .slick-next {
        right: -100px;

        &::before {
          content: "\f105";
        }
      }

      .slick-dots li {
        width: 50px;
        height: 3px;

        button {
          width: 100%;
          height: 100%;
          padding: 0;
          background: #3c3c3f;

          &::before {
            content: none;
          }
        }

        &.slick-active {
          button {
            background: @brand-primary;
          }
        }
      }
    }
  }
}

.about {
  .flexbox();
  background: #1d1e20;

  .about-info,
  .about-preview {
    width: ~'calc(100% / 2)';
  }

  .about-info {
    // max-width: 860px;
    padding: 80px;
    text-align: center;

    .container_header {
      margin-bottom: 40px;

      span.line {
        display: block;
        background: #6d6d6d;
        height: 1px;
        width: 30px;
        margin: 10px auto;
      }
    }

    >p {
      line-height: 1.8;
      color: #6d6d6d;
      font-size: 16px;
    }

    .more-link {
      width: 230px;
      margin-top: 60px;
    }
  }
}

.news {
  padding: 100px 0;
  background: #0c0c0c;

  .module_container{
    max-width: initial;
  }
  .container_header{
    text-align: left;
    float: left;
    padding-bottom: 50px;
    min-height: 50px;
  }
  .container_category{
    margin-right: 40px;
    padding-top: 5px;
    float: right;
  }
  .content_wrapper{
    position: relative;
    height: 510px;
  }
  .news-list{
    float: right;
    width: 50%;
  }
}

.team{
  min-height: 360px;
  padding: 100px 0 0;
  background: #272727;
  overflow: inherit;

  .module_container{
    max-width: initial;
    padding: 0 80px;
  }
  .container_header{
    text-align: left;
    float: left;
    padding-bottom: 50px;
    min-height: 50px;
    position: absolute;
    top: 100px;
    padding-top: 60px;
    width: 360px;
  }
  .content_wrapper{
    padding: 0 50px;
  }
  .side{
    margin-left: calc(50% - 37% - 20px);
    margin-top: -240px;
  }
}
</style>
