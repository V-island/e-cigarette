<template>
<div class="item" :class="type">
  <router-link class="item_box" :to="`/news/${options.id}`">
    <div class="item_img">
      <img :src="options.imgUrl" :alt="options.title">
      <div class="item_mask"></div>
    </div>
    <div class="item_wrapper clearfix">
      <p class="date_wrap">
        <span class="year">{{options.year}}</span>
        <span class="md">{{options.date}}</span>
      </p>
      <div class="item_info clearfix">
        <div class="text_wrap">
          <p class="title ellipsis">{{options.title}}</p>
          <p class="subtitle ellipsis">{{options.subtitle}}</p>
        </div>
      </div>
      <div class="item_des">
        <p class="description">{{options.description}}</p>
      </div>
    </div>
  </router-link>
  <router-link class="details" :to="`/news/${options.id}`">
    详情<i class="fa fa-angle-right" aria-hidden="true"></i>
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'preview'
    }
  },
}
</script>

<style lang="less" scoped>
.item.preview {
  position: relative;
  padding: 40px 20px 20px 38px;

  &:not(:first-child) {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    &:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, .08);

      .item_wrapper{
        .item_info .title {
          color: @brand-primary;
          -webkit-transform: translateX(-17px);
          -ms-transform: translateX(-17px);
          transform: translateX(-17px);
        }
        .item_des {
          -webkit-transform: translateX(10px);
          -ms-transform: translateX(10px);
          transform: translateX(10px);
          .description {
            border-color: rgba(255, 255, 255, .15);
          }
        }
      }
      .details {
        &::after{
          left: 15px;
          opacity: 1;
        }
        &::before{
          left: 30px;
          opacity: 0
        }
      }
    }
    .item_wrapper {
      .item_info {
        width: 70%;
        .title {
          color: #D2D2D2;
          font-size: 15px;
          line-height: 30px;
          padding-left: 26px;
          -webkit-transform: translateX(-27px);
          -ms-transform: translateX(-27px);
          transform: translateX(-27px);
          transition: all .36s ease;
          &::before {
            content: "\f111";
            font-family: FontAwesome;
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            position: absolute;
            left: 0;
            -webkit-transform: scale(.4);
            -ms-transform: scale(.4);
            transform: scale(.4);
            line-height: inherit;
          }
        }
      }
      .item_des {
        transition: all .36s ease;
      }
      .date_wrap {
        float: right;
        text-align: right;
        .md {
          font-size: 22px;
        }
      }
    }
    .item_img {
      display: none;
    }
    .details {
      position: absolute;
      right: 26px;
      bottom: 44px;
      width: 40px;
      height: 16px;
      color: transparent;
      border-left: 1px solid rgba(255, 255, 255, .1);
      overflow: hidden;
      &::after,&::before{
        font-family: FontAwesome;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        transition: all .36s ease;
        // content: "\f105";
        content: "\f178";
        color: #999;
        position: absolute;
        top: 50%;
        font-size: 20px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      &::after{
        left: -30px;
        opacity: 0;
      }
      &::before{
        left: 15px;
      }
    }
  }
  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 60px 44px 0;
    box-sizing: border-box;
    transition: background .36s ease;
    width: 40%;
    height: auto;
    max-height: 550px;
    background-color: transparent;
    
    &:hover {
      .item_wrapper .item_des .description {
        padding-left: 30px;
        border-color: rgba(255, 255, 255, .15);
      }
      .item_img img {
        -webkit-transform: scale(1.08);
        -ms-transform: scale(1.08);
        transform: scale(1.08);
      }

      .details {
        bottom: -10px;
        opacity: 1;
        &::after,&::before{
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        &::after{
          -webkit-transform: none;
          -ms-transform: none;
          transform: none;
          margin-left: -8px;
          margin-top: -1px;
        }
        &::before{
          margin-top: -8px;
          -webkit-transform: none;
          -ms-transform: none;
          transform: none;
          margin-left: -1px;
        }
      }
    }
    .item_img {
      // position: absolute;
      // bottom: 122px;
      overflow: hidden;
      img {
        transition: all .36s ease;
        width: 100%
      }
    }
    .item_wrapper {
      .item_des {
        margin-top: 18px;
        margin-bottom: 22px;
        .description {
          transition: all .36s ease;
          padding-left: 0;
          box-sizing: border-box;
          font-size: 13px;
          line-height: 26px;
          height: auto;
          max-height: 52px;
          border-left: 1px solid transparent;
          width: calc(100% - 100px);
          margin-left: 100px;
          overflow: hidden;
        }
      }
      .item_info {
        .title {
          color: #eaeaea;
          font-size: 18px;
          line-height: 30px;
          margin-top: 35px;
        }
      }
    }
    .details {
      position: absolute;
      left: 100px;
      bottom: -80px;
      width: 140px;
      height: 37px;
      color: transparent;
      opacity: 0;
      background-color: @brand-primary;
      transition: all .36s ease;
      &::after,&::before{
        content: '';
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: all .36s ease;
      }
      &::after{
        width: 15px;
        height: 0;
        border-top: 1px solid #fff;
        left: 0;
      }
      &::before{
        width: 0;
        height: 15px;
        border-left: 1px solid #fff;
        top: -50%;
      }
    }
    @media (max-width: @screen-sm-max) {
      position: relative;
      width: 100%;
      padding: 0;
    }
  }
  .item_wrapper {
    color: #999;
    transition: color .36s ease;

    .item_info{
      .title {
        color: inherit;
        font-size: 15px;
        line-height: 30px;
      }
    }
    .item_des {
      margin-top: 11px;
      .description {
        font-size: 13px;
        line-height: 26px;
        height: 52px;
        color: rgba(255, 255, 255, .4);
        width: 80%;
        overflow: hidden;
      }
    }
    .date_wrap {
      color: inherit;
      font-family: helveticaneuethn, Arial;
      width: 100px;
      overflow: hidden;
      float: left;
      .year {
        display: none;
        font-family: inherit;
      }
      .md {
        color: inherit;
        font-size: 24px;
        line-height: 30px;
        font-family: inherit;
      }
    }
  }
}
</style>
