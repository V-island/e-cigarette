<template>
  <section>
    <BannerPreview :options='banner'/>
    <div class="page_module">
      <div class="container_header wow fadeInUp">
        <p class="title">资讯</p>
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
      </div>
      <div class="container_content" >
        <div class="list-wrapper">
          <NewListItem class="wow fadeInUp" v-for="(item, index) in newsList" :data-wow-delay="`${index/10}s`" :key="item.id" :options="item"></NewListItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import WowMixin from "@mixins/WowMixin";
  import BannerPreview from '../components/BannerPreview.vue'
  import NewListItem from '../components/NewListItem.vue'

  export default {
    mixins: [WowMixin],
    components: {
      BannerPreview,
      NewListItem
    },
    data() {
      return {
        banner: {
          name: '资讯',
          url: './banner/banner_news.png'
        },
        newsList: [{
          id: '202106002',
          date: '2021-06-10',
          title: '第二届日本国际电子烟展顺利开幕',
          description: '为期三天的2021CECMOL国际电子烟展——日本展在5月23日顺利开幕，感谢所有展商、媒体、观众对本次展会给予的支持与肯定！',
          imgUrl: './news/news02.png'
        },{
          id: '202106003',
          date: '2021-06-10',
          title: '电子烟超声波雾化器有前途吗？',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news03.png'
        },{
          id: '202106004',
          date: '2021-06-10',
          title: '青禾参加全球最大电子烟展会IECIE',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news04.png'
        },{
          id: '202106005',
          date: '2021-06-10',
          title: '电子烟超声波雾化器有前途吗？',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news05.png'
        },{
          id: '202106004',
          date: '2021-06-10',
          title: '青禾参加全球最大电子烟展会IECIE',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news04.png'
        },{
          id: '202106005',
          date: '2021-06-10',
          title: '电子烟超声波雾化器有前途吗？',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news05.png'
        },{
          id: '202106004',
          date: '2021-06-10',
          title: '青禾参加全球最大电子烟展会IECIE',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news04.png'
        },{
          id: '202106005',
          date: '2021-06-10',
          title: '电子烟超声波雾化器有前途吗？',
          description: '现在市面上几乎所有的电子烟品牌，都是靠加热型雾化器产生烟雾。火器电子烟看到，虽然加热型雾化器技术...',
          imgUrl: './news/news05.png'
        }],
      }
    },
  }
</script>

<style lang="less" scoped>
.container_content{
  overflow: hidden;
}
.list-wrapper{
  margin-left: -1px;
}
</style>