<template>
<section>
  <BannerPreview :options='banner' />
  <div class="introduction page_module">
    <v-container>
      <div class="introduction-content" :style="introduction.style">
        <div class="title">
          <p>深圳市青禾科技有限公司</p>
          <p>是一家<span>以用户诉求为导向</span>的科技创新型公司</p>
          <p>于2020年正式成立</p>
        </div>
        <p class="description">LVC团队主要成员由来自资深游戏行业，4A广告公司，工业设计，电子元器件及世界500强仪器设备公司精英构成，完全跨界的组合成就了我们可以用不一样的眼光看待我们从事的全新行业，旗下青禾品牌的第一款产品一经推出就火爆了整个中国市场，目前我们已经向市场投放了全新的一次性电子烟，敬请期待。</p>
      </div>
      </v-container>
  </div>
  <div class="course page_module">
    <v-container>
      <div class="container_header wow fadeInUp">
        <p class="title">发展历程</p>
        <p class="subtitle">development path</p>
      </div>
      <div class="course-content">
        <div class="course-item wow fadeInUp" v-for="(item, index) in courseList" :key="index">
          <p class="date">
            <span>{{item.date}}</span>
          </p>
          <p class="description">{{item.description}}</p>
        </div>
      </div>
    </v-container>
  </div>
  <div class="team page_module">
    <v-container>
      <div class="container_header wow fadeInUp">
        <p class="title">团队介绍</p>
        <p class="subtitle">team introduction</p>
      </div>
      <div class="team-content" :style="team.style">
        <TeamSlider class="side" :list="teamList" theme="team-theme" />
      </div>
    </v-container>
  </div>
</section>
</template>

<script>
import WowMixin from "@mixins/WowMixin";
import BannerPreview from '../components/BannerPreview.vue'
import TeamSlider from '../components/TeamSlider.vue'

export default {
  mixins: [WowMixin],
  components: {
    BannerPreview,
    TeamSlider
  },
  data() {
    return {
      banner: {
        name: '关于',
        url: './banner/banner_about.png'
      },
      introduction: {
        style: {
          backgroundImage: `url(${require('@/assets/about/team_bg.png')})`
        },
      },
      team: {
        style: {
          backgroundImage: `url(${require('@/assets/about/lvc_bg.png')})`
        },
      },
      courseList: [{
        date: '2021.03',
        description: '青禾的第一款产品问世，在大烟雾盒子颓势的时代，青禾的问世在玩家中掀起了一次骚动，作为第一款产品，我们逆市而生，只因为我们懂得始于热爱，赋予热爱。'
      },{
        date: '2021',
        description: '2020年1月，LVC团队成了了青禾科技有限公司，作为新的起点，我们会坚持自己的理念，拿出出色的产品，用热爱感动热爱，用热爱撼动造作。'
      }],
      teamList: [{
        id: '202106001',
        title: '马克',
        subtitle: '常务副总经理',
        description: '拥有24年的管理 工作和管理咨询经验，目前是战略咨询中心、人力资源咨询中心、运营管理咨询中心核心领导。',
        imgUrl: './team/team01.png'
      }, {
        id: '202106002',
        title: '马克',
        subtitle: '常务副总经理',
        description: '工作和管理咨询经验，目前是战略咨询中心、人力资源咨询中心、运营管理咨询中心核心领导。',
        imgUrl: './team/team01.png'
      }, {
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
.introduction{
  .introduction-content{
    .background-imager();
    background-position: right 20%;
    background-size: inherit;
    height: 100%;

    span{
      color: @brand-primary;
    }
  }
  .title{
    margin-bottom: 40px;

    >p{
      font-size: 40px;
      font-weight: bold;
      margin: 0 auto;
      position: relative;
      color: #fff;
      line-height: 1.5;
    }
  }
  p.description{
    margin-top: 20px;
    font-size: 16px;
    line-height: 3;
    color: #7e7e7e;
  }
}
.course{
  background: #1b1b1b;

  .container_header{
    text-align: left;
    margin-bottom: 50px;

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
  .course-item{
    margin-right: 20px;
    .date{
      font-size: 36px;
      font-weight: bold;
      margin: 0 auto;
      position: relative;
      color: #fff;
      line-height: 1.5;
      
      >span{
        background: #1b1b1b;
        padding-right: 40px;
      }

      &::after{
        content: '';
        position: absolute;
        top: 50%;
        height: 1px;
        left: 200px;
        right: 0;
        background-color: @md-grey-800;
      }
    }
    .description{
      margin-top: 20px;
      font-size: 16px;
      line-height: 1.8;
      color: #7e7e7e;
    }
  }
}
.team {
  min-height: 360px;
  padding: 50px 0 0;
  overflow: inherit;
  background-color: #272727;

  .container_header{
    margin-left: 50%;
    text-align: left;

    .title {
      font-size: 36px;
    }
    .subtitle {
      color: #6d6d6d;
    }
  } 
  
  .team-content{
    .background-imager();
    background-size: inherit;
    background-position: 15% bottom;
  }

  .side {
    margin-top: -240px;
  }
}
</style>
