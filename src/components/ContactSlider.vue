<template>
<section>
<VueSlickCarousel class="slick-slider" v-bind="settings" ref="info">
  <div v-for="item in list" :key="item.id">
    <div class="slider wow fadeInUp">
      <div class="preview" :style="{backgroundImage: `url(${item.imgUrl})`}">
        <!-- <img :src="item.imgUrl" :alt="item.title"> -->
      </div>
      <div class="info">
        <div class="text_wrap">
          <p class="title ellipsis">{{item.title}}</p>
          <p class="subtitle ellipsis">{{item.subtitle}}</p>
        </div>
        <p class="description">{{item.description}}</p>
      </div>
    </div>
  </div>
</VueSlickCarousel>
</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      settings: {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
    }
  },
}
</script>

<style lang="less" scoped>
.slider {
  .flexbox();
  .justify-content(center);
  .align-items(center);

  height: 500px;
  // margin-top: -200px;
}

.preview,
.info {
  width: ~'calc(100% / 2)';
}
.preview {
  .background-imager();
  height: 100%;
  img{
    width: 100%;
    height: auto;
  }
}
.info{
  padding-top: 80px;

  .title{
    width:50%;
    color: #fff;
    font-size: 26px;
  }
  .subtitle{
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
    line-height: 16px;
  }
  .description{
    .text-line-clamp(3);
    margin-top: 20px;
    font-size: 14px;
    line-height: 26px;
    color: rgba(255, 255, 255, .4);
    width: 50%;
    overflow: hidden;
  }
}

/deep/ .slick-slider{
  .slick-prev,
  .slick-next {
    margin-top: -20px;
    outline: 0;
    width: 40px;
    height: 40px;
    z-index: 2;
    // background: rgba(0, 0, 0, .5);
    transition: all ease-out .3s;

    &::before {
      font: normal normal normal 14px/1 FontAwesome;
      font-size: 24px;
    }

    &:hover {
      background: @brand-primary;
    }
  }

  .slick-prev {
    left: auto;
    right: 100px;

    &::before {
      content: "\f104";
    }
  }

  .slick-next {
    right: 50px;

    &::before {
      content: "\f105";
    }
  }
}
</style>
