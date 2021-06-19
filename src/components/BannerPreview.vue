<template>
  <section id="topSlider" :class="type">
    <div class="banner">
      <div class="image" :data-thumb="options.url" :style="{backgroundImage: `url(${options.url})`}"></div>
      <img class="hide" v-bind:alt="options.name" v-bind:src="options.url">
    </div>
  </section>
</template>

<script>
  import $ from "jquery";
  import Navbar from '@utils/Navbar'

  export default {
    props: {
      options: {
        type: Object,
        required: true,
      },
      type: String
    },
    data() {
      return {
        config: {
          parameter:'#topSlider .banner'
        },
      }
    },
    mounted() {
      const config = this.config
      $(function () {
        Navbar.parallax(config.parameter);
      })
    },
  }
</script>

<style lang="less" scoped>
.hide{
  display: none;
}
#topSlider{
  height: ~'calc(80vh - 82px)';

  &.small{
    height: 20vh;
    max-height: 300px;

    .banner{
      .image{
        height: 20vh;
        max-height: 300px;
      }
    }
  }

  @media (min-width:  @screen-xs-max) and (max-width: @screen-md-max) {
    height: ~'calc(50vh - 56px)';
  }
  @media (max-width: @screen-xs-max) {
    height: ~'calc(30vh - 56px)';
  }
}
.banner{
  width: 100%;

  .image{
    .background-imager();
    background-size: cover;
    width: 100%;
    height: ~'calc(80vh - 82px)';

    @media (min-width:  @screen-xs-max) and (max-width: @screen-md-max) {
      height: ~'calc(50vh - 56px)';
    }
    @media (max-width: @screen-xs-max) {
      height: ~'calc(30vh - 56px)';
    }
  }
}
</style>