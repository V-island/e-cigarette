<template>
  <section>
    <BannerPreview :options='banner' type="small"/>
    <div class="page_detail">
      <v-container>
        <div class="heading">
          <p class="title">{{detailInfo.title}}</p>
          <div class="info">
            <span>{{detailInfo.tag}}</span>
            <span>{{detailInfo.date}}</span>
          </div>
        </div>
        <div class="content" v-html="detailInfo.content"></div>
        <div class="pagination">
          <router-link class="prev" :to="`/news/${detailInfo.prevNews.id}`">
            上一篇：{{detailInfo.prevNews.name}}
          </router-link>
          <router-link class="next" :to="`/news/${detailInfo.nextNews.id}`">
            下一篇：{{detailInfo.nextNews.name}}
          </router-link>
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
          name: '资讯详情',
          url: './banner/banner_news_detail.png'
        },
        detailInfo: {
          title: '第二届日本国际电子烟展顺利开幕',
          tag: '新闻活动',
          date: '2021-01-22',
          content: `<p>为期三天的2019CECMOL国际电子烟展——日本展在5月23日顺利开幕，感谢所有展商、媒体、观众对本次展会给予的支持与肯定！初步数据显示，本次展会共吸引了来自数十个国家买家和参展者，从热闹的现场不难看出，电子烟的高速发展在全球各地都得以体现，而在日本，我们也可以感受到他们与众不同的小烟文化。</p>
          <p>Huaeason以全新的姿态站在日本展的舞台上，向广大观众展示着产品的魅力。</p>
          <p>我们发现，在日本的电子烟玩家与相关的销售者，有着与其他国家的Vaper不同的执着和仔细，他们对于电子烟的需求不仅仅体现在健康或体感的某一个单独方向，他们更愿意将细节的数据和使用感受共同作出比较。</p>
          <img src="./news_detail/detail01.png">
          <img src="./news_detail/detail02.png">`,
          prevNews: {
            id: '2021061801',
            name: '第一届日本国际电子烟展顺利开幕'
          },
          nextNews: {
            id: '2021061802',
            name: '第二届日本国际电子烟展顺利开幕'
          }
        }
      }
    },
  }
</script>

<style lang="less" scoped>
</style>