<template>
  <section>
    <BannerPreview :options='banner' type="small"/>
    <div class="detail page_module">
      <v-container>
        <v-breadcrumbs class="breadcrumbs" :items="breadcrumbs" dark>
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="detail-content">
          <v-row>
            <v-col cols="12" xs="12" md="6" lg="5" xl="5">
              <div class="preview">
                <img :src="detailInfo.previewUrl">
              </div>
            </v-col>
            <v-col cols="12" xs="12" md="6" lg="7" xl="7">
              <div class="info">
                <p class="title">{{detailInfo.title}}</p>
                <p class="description">{{detailInfo.description}}</p>
                <ul class="info-list">
                  <li v-for="item in detailInfo.labelList" :key="item">{{item}}</li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="navbar page_module">
      <ul class="menu" v-scroll-spy-active="{class: 'active'}" v-scroll-spy-link>
        <li :key="item" v-for="item in navbar" class="menu-item">
          <a>{{item}}</a>
        </li>
      </ul>
    </div>
    <div v-scroll-spy="{data: 'section'}">
      <div class="banner page_module">
        <template v-for="(item, index) in detailInfo.bannerList" >
          <img :src="item.url" :key="index">
        </template>
      </div>
      <div class="parameter page_module">
        <v-container>
          <div class="container_header wow fadeInUp">
            <p class="title">产品参数</p>
          </div>
          <div class="parameter-content">
            <div class="parameter-item wow fadeInUp" v-for="(item, index) in detailInfo.parameter" :data-wow-delay="`${index/10}s`" :key="item.title">
              <p class="title">{{item.title}}</p>
              <p class="description">{{item.description}}</p>
            </div>
          </div>
        </v-container>
      </div>
      <div class="show page_module">
        <v-container>
          <div class="container_header wow fadeInUp">
            <p class="title">产品展示</p>
          </div>
          <div class="image-content">
            <v-row>
              <v-col class="image-item" v-for="(item, index) in detailInfo.showList" :data-wow-delay="`${index/10}s`" :key="item.id" cols="12" xs="12" md="12" lg="4" xl="4">
                <img class="wow fadeInUp" :src="item.url" :alt="item.name">
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
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
        section: 0,
        banner: {
          name: '产品详情',
          url: './banner/banner_product_detail.png'
        },
        breadcrumbs: [
          {
            text: '产品',
            disabled: true,
            href: 'product',
          },
          {
            text: '产品详情',
            disabled: true,
          },
        ],
        navbar: [
          '产品介绍',
          '产品参数',
          '产品展示'
        ],
        detailInfo: {
          title: 'LVC 230W',
          description: '拥有私模的锌合金机身，分为三个颜色（红色，白色和黑色），每一个产品拥有3套共6片可替换艺术面板，以日本名著【源氏物语】为设计蓝本，通过考究的设计，以最接近原著的形式设计了lvc的形象，和市面和风MOD产品不同，我们对日本文化的研究更加深刻，设计期间参考了大量的设计文献和资料，从月冈芳年大师到鸟山石燕大师，每一个细节都透露着对浮世绘和设计的敬畏。',
          labelList: [
            '锌合金全金喷砂属机身',
            '510不锈钢通用接口',
            '230W大功率，可调功率',
            '0.018秒瞬间点火'
          ],
          previewUrl: './product_detail/preview.png',
          bannerList: [{
            url: './product_detail/banner01.png'
          },{
            url: './product_detail/banner02.png'
          }],
          parameter: [{
            title: '品名',
            description: '般若230W电子烟',
          },{
            title: '特性',
            description: '输出功率可调节，支持恒功率输出，能够自动检测并匹配雾化器电阻，且支持Ｎi/Ｔi材料雾化器温度控制．采用全数字式带同步整流的DC/DC 转换器，具有很高的电源转换效率，可最大限度的延长电池使用寿命。',
          },{
            title: '材质构成',
            description: '锌合金外框，塑胶电池仓，不锈钢510通用接口',
          },{
            title: '产品尺寸',
            description: '长：8.8cm宽：5.3cm 厚：2.5cm',
          },{
            title: '输出功率',
            description: '0-230W 轻柔，正常，强劲',
          }],
          showList: [{
            name: '展业套装',
            url: './product_detail/product01.png'
          },{
            name: '套盒',
            url: './product_detail/product02.png'
          },{
            name: '烟弹',
            url: './product_detail/product03.png'
          }]
        }
      }
    },
  }
</script>

<style lang="less" scoped>
.breadcrumbs{
  padding: 18px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
}
.detail{
  background-color: @content-bg;
  padding: 10px 0 40px;
  .detail-content{
    padding: 40px 0;
  }
  .preview{
    .flexbox();
    .align-items(center);
    .justify-content(center);
    padding: 0 40px 0 10px;
    

    >img{
      width: 100%;
      height: auto;
      max-height: 450px;
    }
  }
  .info{
    padding: 20px;
    .title{
      font-size: 30px;
      font-weight: bold;
      color: @md-white;
    }
    .description{
      margin-top: 20px;
      font-size: 16px;
      line-height: 1.8;
      text-transform: uppercase;
      color: #878787;
      margin-bottom: 40px;
      width: 80%;
    }
  }
  .info-list{
    border: 1px solid rgba(255, 255, 255, .15);
    border-left-width: 0;
    border-right-width: 0;
    padding: 10px;

    >li{
      color: @md-white;
      font-size: 16px;
      padding: 15px 0;
      font-weight: 300;
      list-style: inside;
    }
  }
}
.navbar{
  padding: 0;
  background-color: #171717;

  .menu{
    .flexbox();
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
    margin: 0 auto;
    padding: 0;
    width: 435px;

    >li{
      .flexbox();
      .align-items(center);
      .justify-content(center);
      cursor: pointer;
      min-width: 90px;
      max-width: 360px;
      padding: 15px 40px;
    }
    .menu-item{
      >a{
        color: #ababab;
        font-size: 16px;
        font-weight: bold;
      }
      &:hover{
        >a{
          color: @brand-primary;
        }
      }
      &.active{
        background-color: @brand-primary;
        >a{
          color:@md-white;
        }
      }
    }
  }
}
.banner{
  padding: 0;
  background-color: @content-bg;
  
  img{
    width: 100%;
    height: auto;
  }
}
.parameter{
  padding: 60px 0;
  background-color: @content-bg;

  .container_header{
    .title{
      font-size: 36px;
    }
  }
  .parameter-content{
    padding: 80px 0 0;
  }
  .parameter-item{
    font-size: 16px;
    padding: 30px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, .15);

    &:first-child{
      border-top: 1px solid rgba(255, 255, 255, .15);
    }

    .title {
      font-weight: bold;
      margin: 0 auto;
      position: relative;
      color: #fff;
    }
    .description {
      margin-top: 5px;
      text-transform: uppercase;
      line-height: 1.6;
      color: #797979;
    }
  }
}
.show{
  padding: 40px 0;
  background-color: @content-bg;

  .container_header{
    .title{
      font-size: 36px;
    }
  }
  .image-content{
    padding: 60px 0 40px;
  }
  .image-item{
    width: 100%;
    padding: 15px;

    >img{
      width: 100%;
      height: auto;
    }
  }
}
</style>