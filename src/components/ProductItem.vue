<template>
  <div class="item">
    <router-link class="item_box" :to="`/product/${options.id}`">
      <div class="item_img">
          <img :src="options.imgUrl" :alt="options.title">
          <div class="item_mask"></div>
      </div>
      <div class="item_wrapper clearfix">
        <div class="item_info clearfix">
          <div class="text_wrap">
              <p class="title ellipsis">{{options.title}}</p>
              <p class="subtitle ellipsis">{{options.description}}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style lang="less" scoped>
.item{
  width: calc(100% / 4 - 15px);
  height: auto;
  float: left;
  margin-right: 15px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 0 0 rgba(0, 0, 0, .15);
  transition: all .36s ease;

  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 30%;
    opacity: 0;
    height: 2px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: @brand-primary;
    transition: all .36s ease-out;
  }

  &:hover{
    background-color: #111;
    box-shadow: 0 8px 20px rgba(0, 0, 0, .3);

    &:after{
      opacity: 1;
      width: 100%
    }
    .item_info{
      padding-left: 8%;
      background-color: @brand-primary;

      .subtitle{
        color: rgba(255, 255, 255, .6);
      }
    }
    .item_img {
      .item_mask{
        opacity: 1;
        margin: -20px auto auto -20px;
      }
      img{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
      }
      &::after{
        height: calc(100% - 20px);
        left: 10px;
        top: 10px;
        opacity: 1;
        background-color: rgba(0, 0, 0, .3);
      }
      &::before{
        left: 10px;
        width: calc(100% - 20px);
        z-index: 2;
        opacity: 1;
      }
    }
  }

  img{
    transition: all .36s ease;
    width: 100%;
  }

  .item_info{
    transition: padding .36s ease;
    background: rgba(0, 0, 0, .1);
    padding: 6% 5% 6%;
    text-align: left;

    .title{
      color: #fff;
      font-size: 16px;
    }
    .subtitle{
      font-size: 14px;
      margin-top: 10px;
      line-height: 16px
    }
  }
  .item_img{
    position: relative;
    overflow: hidden;

    .item_mask{
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
      transition: all .36s ease;
      opacity: 0;
      border-radius: 100%;
      width: 44px;
      height: 44px;
      border: 2px solid rgba(255, 255, 255, .7);
      box-sizing: border-box;
      margin: -80px auto auto -20px;
      z-index: 1;

      &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        width: 2px;
        height: 16px;
        background-color: #fff;
        margin-top: -8px;
        margin-left: -1px;
      }
      &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        height: 2px;
        width: 16px;
        background-color: #fff;
        margin-top: -1px;
        margin-left: -8px;
      }
    }
    
    &::after{
      content: '';
      position: absolute;
      height: calc(100% - 300px);
      width: calc(100% - 20px);
      border-left: 2px solid @brand-primary;
      left: 10px;
      border-right: 2px solid @brand-primary;
      display: block;
      top: 150px;
      transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
      opacity: 0;
    }
    &::before{
      content: '';
      position: absolute;
      width: calc(100% - 300px);
      height: calc(100% - 20px);
      border-top: 2px solid @brand-primary;
      top: 10px;
      border-bottom: 2px solid @brand-primary;
      display: block;
      left: 150px;
      transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
      opacity: 0;
    }
  }
}
</style>