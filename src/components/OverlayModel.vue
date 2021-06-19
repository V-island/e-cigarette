<template>
  <v-overlay :value="overlay" opacity="0.9" z-index="9999">
    <div class="model" :style="{backgroundImage: `url('${imageUrl}')`}">
      <div class="button-groups">
        <div class="button" @click="overlay = false" v-ripple>已满18岁</div>
        <div class="button outlined" @click="windowClose" v-ripple>离开</div>
      </div>
    </div>
  </v-overlay>
</template>

<script>
  export default {
    data() {
      return {
        overlay: true,
        imageUrl: './model_bg.png'
      }
    },
    methods: {
      windowClose() {
        window.opener = null;
        window.open("about:blank", "_top").close()
      }
    },
  }
</script>

<style lang="less" scoped>
.model{
  .background-imager();
  background-position: center 50px;
  background-size: auto;
  background-color: @md-white;
  width: 620px;
  height: 420px;
  border-radius: 20px;
  position: relative;

  @media (max-width: 620px) {
    width: ~'calc(100vw - 20px)';
    background-size: 90%;
    height: 350px;
  }

  .button-groups{
    .flexbox();
    .align-items(center);
    .justify-content(space-around);
    width: 80%;
    position: absolute;
    bottom: 40px;
    left: 10%;
    right: 0;
  }
  .button{
    cursor: pointer;
    text-align: center;
    border: 1px solid #1d1e20;
    background-color: #1d1e20;
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 18px;
    min-width: 150px;
    &.outlined{
      background-color: transparent;
      color: #1d1e20;
    }
  }
}
</style>