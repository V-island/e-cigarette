<template>
<div id="header" class="navbar">
  <div class="wrapper">
    <div class="content">
      <div class="head-top">
        <router-link class="logo" to="/">
          <img src="@/assets/logo.png" alt="LVC">
        </router-link>
      </div>
      <div class="nav-wrapper">
        <div class="content">
          <ul class="nav">
            <li class="navitem">
              <router-link class="active" to="/"><span data-title="首页">首页</span></router-link>
            </li>
            <li class="navitem">
              <router-link to="/product"><span data-title="产品">产品</span></router-link>
            </li>
            <li class="navitem">
              <router-link to="/news"><span data-title="资讯">资讯</span></router-link>
            </li>
            <li class="navitem">
              <router-link to="/merchants"><span data-title="招商">招商</span></router-link>
            </li>
            <li class="navitem">
              <router-link to="/about"><span data-title="关于">关于</span></router-link>
            </li>
            <li class="navitem">
              <router-link to="/contact"><span data-title="联系">联系</span></router-link>
            </li>
          </ul>
          <SearchGroup />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@utils/Navbar'
import SearchGroup from './SearchGroup.vue'

export default {
  components: {
    SearchGroup,
  },
  mounted () {
    Navbar.headerHover();
  },
}
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  z-index: 99;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  border-color: #303030;
  background: rgba(0, 0, 0, 0.2);
}
.wrapper{
  width: 100%;
  padding: 0 0 0 80px;
  >.content{
    transition: all .36s ease;
    height: 82px;
  }
}
.content{
  ::after{
    content: "";
    display: block;
    clear: both;
  }
}
.head-top{
  height: 100%;
  float: left;
  position: relative;
}
.nav-wrapper{
  float: right;
}
.logo{
  display: block;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  img{
    height: auto;
  }
}
.nav{
  position: relative;
  height: 82px;
  float: right;
  margin: 0 80px 0 0;

  >li:not(.jsMoveEl){
    transition: all .36s ease;
    position: relative;
    float: left;
    line-height: 82px;
    font-size: 14px;

    >a{
      transition: all .3s ease-out 0s;
      display: block;
      padding: 0 28px;
      height: calc(100% - 4px);
      color: #ccc;
      
      .fa {
        margin-left: 6px;
      }
      &:hover{
        box-shadow: 0 -2px 6px rgba(0, 0, 0, .12);
      }
      &.active {
        color: #111;
        border-color: @brand-primary;
      }
      &:hover,
      &.active{
        color: @brand-primary;
      }
    }

    &:hover .subnav {
      display: block;
      opacity: 1;
      visibility: visible;
    }
    .subnav {
      display: none;
      position: absolute;
      width: 180px;
      box-shadow: 0 13px 42px 11px rgba(0, 0, 0, .05);
      height: auto;
      z-index: 199;
      top: calc(100% - 2px);
      left: 0;
      border-width: 2px 0 0;
      border-style: solid;
      overflow: hidden;
      background: #222;

      li {
        width: 100%;

        a {
          font-weight: 500;
          padding: 12px 24px;
          line-height: 22px;
          display: block;
          transition: all .2s ease-in-out;
          font-size: 12px;
          color: #d4d4d4;
          &:hover {
            color: #fff;
            background: #233876;
            background-color: @brand-primary;
          }
        }
      }
    }

    &.jsMoveEl{
      transition: height .36s ease;

      span {
        background: #233876;
        background-color: @brand-primary;
      }
    }
  }
}
</style>
