<template>
<div id="search-nav" class="searchGroup">
  <div class="search_wrap">
    <div class="searchOnOff">
      <!-- <icon-ios-search w="24px" h="24px"/> -->
      <router-link to="/search"><icon-ios-search w="24px" h="24px"/></router-link>
    </div>
    <div class="searchBox">
      <div class="searchFormGroup">
        <input type="text" aria-label="搜索" placeholder="搜索" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
        <div class="searchSub"><span>搜索</span><i class="fa fa-search" aria-hidden="true"></i></div>
      </div>
      <div class="searchClose"><i class="fa fa-times" aria-hidden="true"></i></div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $(function () {
      // var searchWrap = $('#search-nav');

      // function opensearch() {
      //   var openSearchBtn = $('.searchOnOff');
      //   openSearchBtn.click(function () {
      //     if (searchWrap.hasClass('_open')) {

      //       $(searchWrap).removeClass('_open');
      //       $('.searchBox', searchWrap).slideUp();
      //     } else {
      //       $(searchWrap).addClass('_open');
      //       $('.searchBox', searchWrap).slideDown();

      //     }
      //   });
      // }

      // if (searchWrap.length) {
      //   opensearch();
      // }
    });
  },
}

</script>

<style lang="less" scoped>
#search-nav {
  display: block !important;
  position: absolute;
  right: 0;
  height: 100%;

  .search_wrap {
    height: 100%;
    margin-right: 60px;
    position: relative;
  }

  .searchOnOff {
    height: 100%;
    display: flex;
    align-items: center;
    width: 30px;
    font-size: 18px;
    color: @md-grey-600;
    cursor: pointer;
  }

  .searchBox {
    position: absolute;
    top: 100%;
    right: 0;
    width: 220px;
    overflow: hidden;
    display: none;
  }

  .searchClose {
    display: none;
  }

  .searchFormGroup {
    .searchSub {
      position: absolute;
      right: 0;
      top: 0;
      color: #000;
      line-height: 34px;
      font-size: 16px;
      width: 35px;
      vertical-align: middle;
      height: 34px;
      cursor: pointer;
      text-align: center;
      display: none;

      span {
        display: none;
      }
    }
  }
}

.searchFormGroup input {
  width: 100%;
  background: #fff;
  height: 34px;
  padding: 0 12px;
  box-sizing: border-box;
  border: 2px solid @brand-primary;
}
</style>
