<template>
  <section id="topSlider" >
    <ul class="content_list">
      <li v-for="(banner, index) in banners" :key="index">
        <div class="item_bg image" :data-thumb="banner.url" :style="`background-image:url(${banner.url})`">
          <img class="hide" v-bind:alt="banner.name" v-bind:src="banner.url" style="display: none;">
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import $ from "jquery";
  require("bxslider");
  require('bxslider/dist/jquery.bxslider.css')
  
  import Navbar from '@utils/Navbar'
  import Banner_01 from '@/assets/home/banner01.png'
  import Banner_02 from '@/assets/home/banner02.png'

  export default {
    data() {
      return {
        config: {
          parameter:'#topSlider .bx-wrapper'
        },
        banners: [{
          name: "青禾1号",
          url: Banner_01
        }, {
          name: "青禾2号",
          url: Banner_02
        }]
      }
    },
    mounted() {
      const config = this.config
      $(function () {
        $("#topSlider .content_list").bxSlider({
          speed: 800,
          infiniteLoop: true, 
          easing: 'ease-out',
          displaySlideQty:1,
          moveSlideQty: 1,
          pager: true,
          prevText: `<i class="fa fa-angle-left"></i>`,
          nextText: `<i class="fa fa-angle-right"></i>`,
        });
        Navbar.parallax(config.parameter);
      })
    },
  }
</script>

<style lang="less">
#topSlider {
    width: 100%;
    height: ~'calc(100vh - 82px)';
    position: relative;
    overflow: hidden;
    display: block;
}
#topSlider .bx-wrapper{
  border-width: 0;
  box-shadow: 0 0 0 #ccc;
  margin-bottom: 0;
  background: transparent;

  .bx-viewport{
    height: ~'calc(100vh - 82px)';
  }

  .bx-pager {
    bottom: 30px;

    a {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-radius: 100%;
      border: 4px solid rgba(0, 0, 0, .3);
      margin: 0 7px;
      box-sizing: border-box;
      background-clip: content-box;
      transition: all .36s ease;

      &.active {
        background-color: transparent;
        border: 2px solid #fff;
      }
      &:hover:not(.active) {
        border-width: 3px;
      }
    }
  }
  .bx-controls-direction a {
    width: 44px;
    height: 70px;
    margin: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    color: rgba(145, 135, 124, .5);
    background-color: transparent;
    border-radius: 0;

    i {
      color: inherit;
      font-size: 24px;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      transform: translateY(-50%) translateX(-50%);
      transition: none
    }

    &:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, .2)
    }

    &.disabled {
      display: block;
    }
    &.bx-next {
      right: 0;
    }
    &.bx-prev {
      left: 0;
    }
  }
  .bx-helper {
    display: none
  }
  .content_list[data-slider-mode="3"] li div.item_bg.image {
    height: 110%;
    top: -5%;
  }
  .content_list{
    &.content_list {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
    }
    li {
      width: 100%;
      height: 100%;
      display: block;

      &.active p {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }

      div.item_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        &.image {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 100%
        }
        &.video video {
          width: 100%;
          height: 100%
        }
      }
      div.mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      a {
        width: 100%;
        height: 100%;
        display: table;
        position: absolute;
        left: 0;
        top: 0;

        div {
          display: table-cell;
          vertical-align: middle;
          padding: 100px 50px;
        }
        i {
          text-indent: 20px;
          font-size: 24px
        }
      }
      p {
        max-width: 1170px;
        margin: 0 auto;
        -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
        transform: translateY(50px);
        transition: all cubic-bezier(.215, .61, .355, 1) .5s;
        -webkit-transition: all cubic-bezier(.215, .61, .355, 1) .5s;
        opacity: 0;
        &.title {
          font-size: 60px;
          line-height: 60px;
          height: 60px;
          transition-delay: 0;
        }
        &.subtitle {
          font-size: 14px;
          height: 20px;
          transition-delay: .2s;
          margin-top: 10px;
        }
      }
    }
  }
  .bx-pager {
    bottom: 65px
  }
  .bx-controls-direction a{
    background: none;
    text-indent: 0;

    i {
      transition: all .3s ease-out 0s
    }
    &:hover i {
      -webkit-animation-name: fadeInLeft;
      animation-name: fadeInLeft
    }
    &.bx-prev i {
      margin-left: -1px;
      margin-top: -1px
    }
  }
}
</style>