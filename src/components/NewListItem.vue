<template>
<div class="item">
  <router-link class="item_box" :to="`/news/${options.id}`">
    <div class="item_img">
      <img :src="options.imgUrl" :alt="options.title">
    </div>
    <div class="item_wrapper clearfix">
      <div class="item_info clearfix">
        <div class="text_wrap">
          <p class="title ellipsis">{{options.title}}</p>
          <p class="subtitle ellipsis">{{options.subtitle}}</p>
        </div>
      </div>
      <div class="item_des">
        <p class="description">{{options.description}}</p>
      </div>
      <p class="date_wrap">
        <span class="date">{{options.date}}</span>
      </p>
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
.item {
  position: relative;
  width: calc(100% / 4 - 15px);
  height: auto;
  float: left;
  transition: all .36s ease;
  border: 1px solid rgba(255, 255, 255, .15);
  border-right-width: 0;
  padding: 40px;

  &:after{
    content: '';
    position: absolute;
    bottom: 20px;
    width: 30%;
    opacity: 0;
    height: 2px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: @brand-primary;
    transition: all .36s ease-out;
  }

  &:hover {
    .item_img img {
      -webkit-transform: scale(1.08);
      -ms-transform: scale(1.08);
      transform: scale(1.08);
    }
    &:after{
      opacity: 1;
      width: ~'calc(100% - 80px)';
    }
  }
  .item_img {
    overflow: hidden;
    img {
      transition: all .36s ease;
      width: 100%
    }
  }
  .item_wrapper {
    color: #999;
    transition: color .36s ease;

    .item_info{
      .title {
        color: #eaeaea;
        font-size: 18px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
    .item_des {
      margin-top: 18px;
      margin-bottom: 22px;

      .description {
        font-size: 16px;
        line-height: 26px;
        color: #939393;
        overflow: hidden;
        transition: all .36s ease;
        box-sizing: border-box;
        .text-line-clamp(3);
      }
    }
    .date_wrap {
      font-family: helveticaneuethn, Arial;
      overflow: hidden;

      .date {
        color: #a5a5a5;
        font-size: 16px;
        line-height: 30px;
        font-family: inherit;
      }
    }
  }
}
</style>
