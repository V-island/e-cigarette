<template>
  <section>
    <BannerPreview :options='banner'/>
    <div class="stand page_module">
      <v-container>
        <div class="container_header wow fadeInUp">
          <p class="title">渠道支持</p>
        </div>
        <div class="stand-content">
          <v-row>
            <v-col v-for="(item, index) in iconList" :key="index" cols="12" xs="6" md="6" lg="3" xl="3">
              <div class="icon-item wow fadeInUp" :data-wow-delay="`${index/10}s`">
                <div class="icon" :style="{backgroundImage: `url(${item.url})`}"></div>
                <div class="info">
                  <p class="title">{{item.title}}</p>
                  <p class="subtitle">{{item.subtitle}}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="image page_module">
      <v-container>
        <div class="container_header wow fadeInUp">
          <p class="title">品牌体验店形象</p>
        </div>
        <div class="image-content">
          <v-row>
            <v-col class="image-item heading" cols="12" xs="6" md="6" lg="3" xl="3">
              <div class="title wow fadeInUp" :style="image.style">
                <p>体验店形式便捷、灵活<br/>多种选择<br/>根据选址量身定制</p>
              </div>
            </v-col>
            <v-col class="image-item" cols="12" xs="6" md="6" lg="3" xl="3">
              <img class="preview wow fadeInUp" src="@/assets/merchants/image01.png">
            </v-col>
            <v-col class="image-item" cols="12" xs="6" md="6" lg="3" xl="3">
              <img class="preview wow fadeInUp" src="@/assets/merchants/image02.png">
            </v-col>
            <v-col class="image-item" cols="12" xs="6" md="6" lg="3" xl="3">
              <img class="preview wow fadeInUp" src="@/assets/merchants/image03.png">
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="join page_module">
      <v-container>
        <div class="container_header wow fadeInUp">
          <p class="title">意向加盟</p>
        </div>
        <div class="join-content wow fadeInUp">
          <div class="preview" :style="join.style">></div>
          <div class="info">
            <img src="@/assets/merchants/QR_code.png">
            <p>加盟代理，可添加LVC渠道招商二维码或致电</p>
            <p>13517261158 沈女士</p>
            <router-link class="more-link" to="/contact">立刻加盟</router-link>
          </div>
        </div>
      </v-container>
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
          name: '招商',
          url: './banner/banner_merchants.png'
        },
        iconList: [
          {
            title: '品牌赋能',
            subtitle: '品牌授权，品牌实力赋能渠道销售，丰富的宣发资源支持',
            url: './icon/icon_merchants01.png'
          },{
            title: '产品支持',
            subtitle: '合作专业研究实验室，行业领先的研发团队，产品持续迭代升级',
            url: './icon/icon_merchants02.png'
          },{
            title: '运营支持',
            subtitle: '提供专业化技术性运营培训指导支持，为经销客户提供场景化专项运营支持',
            url: './icon/icon_merchants03.png'
          },{
            title: '营销策略',
            subtitle: '推出一系列营销活动，助力市场为市场首次',
            url: './icon/icon_merchants04.png'
          }
        ],
        image: {
          style: {
            backgroundImage: `url(${require('@/assets/merchants/image_lvc.png')})`
          }
        },
        join: {
          style: {
            backgroundImage: `url(${require('@/assets/merchants/join_bg.png')})`
          }
        },
      }
    },
  }
</script>

<style lang="less" scoped>
.page_module{
  .container_header{
    text-align: left;
    margin-bottom: 50px;
    padding-left: 10px;

    .title {
      font-size: 36px;
    }
    .subtitle {
      color: #6d6d6d;
    }
  }
  .course-content{
    padding: 40px 0;
    .flexbox();
    .align-items(center);
  }
}
.icon-item{
  .flexbox();
  .flex-direction(row);
  .align-items(center);
  padding: 30px 0;
  margin: 0 10px;

  >.icon{
    .flex(0 0 80px);
    .background-imager();
    background-size: initial;
    border: 1px solid rgba(255, 255, 255, .15);
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 20px;
  }
  >.info{
    .flex(1 0 0);
    .flex-grow(1);
    padding-right: 20px;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 0 auto;
      position: relative;
      color: #fff;
    }
    .subtitle {
      .text-line-clamp(2);
      margin: 4px 0 0;
      font-size: 14px;
      text-transform: uppercase;
      color: #999;
    }
  }
}
.stand{
  padding: 60px 10px;
  .stand-content{
    border: 1px solid rgba(255, 255, 255, .15);
    border-left-width: 0;
    border-right-width: 0;
    padding: 40px 0;
  }
}
.image{
  padding: 60px 10px;
  .image-item{
    width: 100%;
    height: 360px;
    padding: 15px;

    .preview{
      width: 100%;
      height: 100%;
    }
    &.heading{
      padding-right: 15px;
      .title{
        .flexbox();
        .align-items(center);
        .justify-content(center);
        .background-imager();
        background-color: @brand-primary;
        background-position: center left;
        background-size: inherit;
        width: 100%;
        height: 100%;
        position: relative;

        &::before{
          content: '';
          position: absolute;
          top: 60px;
          width: 20px;
          height: 20px;
          right: -10px;
          background-color: @brand-primary;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);

          @media (max-width: @screen-sm-max) {
            top: auto;
            right: auto;
            left: 60px;
            bottom: -10px;
          }
        }

        >p{
          color: #fff;
          font-size: 18px;
          line-height: 2.3;
          font-weight: 300;
        }
      }
    }
  }
}
.join{
  padding: 60px 10px;

  .join-content{
    .flexbox();
    
    @media (max-width: @screen-md-max) {
      .flex-direction(column);
    }
  }
  .preview{
    .flex(1 0 0);
    .flex-grow(1);
    .background-imager();
    background-size: cover;
    min-height: 400px;
  }
  .info{
    .flex(0 0 420px);
    .flexbox();
    .align-items(center);
    .justify-content(center);
    .flex-direction(column);
    background-color: @brand-primary;
    padding: 50px;
    min-height: 700px;
    text-align: center;

    >img{
      width: 200px;
      height: 200px;
      margin-bottom: 30px;
    }
    >p{
      font-size: 18px;
      color: #fff;
      margin: 0 auto;
      line-height: 2.3;
    }
    .more-link{
      margin-top: 60px;
      width: 260px;
      color: #fff;
      border-color: rgba(255, 255, 255, 1);
      height: 50px;
      line-height: 2.8;
      font-size: 18px;

      &:hover{
        color: @brand-primary;
        &::after{
          color: @brand-primary;
        }
      }

      &::before{
        background: rgba(255, 255, 255, 1);
      }
      &::after{
        line-height: 2.4;
      }
    }
  }
}
</style>