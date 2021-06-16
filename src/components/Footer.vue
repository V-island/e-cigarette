<template>
<section>
  <div id="mcontact" class="mcontact module">
    <div class="module_container">
      <div class="container_header wow" style="visibility: visible; animation-name: fadeInUp;">
        <p class="title">联系我们</p>
        <p class="subtitle">Contact Us</p>
      </div>
      <div class="container_content">
        <div class="content_wrapper">
          <div id="contactlist" class="contactlist">
            <div id="contactinfo" class="contactinfo wow" style="visibility: visible; animation-name: fadeInUp;">
              <h3 class="ellipsis contact_name">深圳青禾科技有限公司</h3>
              <p class="ellipsis contact_add">地址：深圳市宝安区新安三路一巷10号</p>
              <p class="ellipsis contact_zip">邮编：518101</p>
              <p class="ellipsis contact_tel">售后电话：0755-86372506</p>
              <p class="ellipsis contact_mob">销售及业务洽谈：19520716007</p>
              <p class="ellipsis contact_fax">售后微信：bgmg2016</p>
              <p class="ellipsis contact_eml">邮箱：shery@vapelustion.com</p>
              <div class="ff_social">
                <a class="fl" target="_blank" href="http://weibo.com/web">
                  <i class="fa fa-weibo"></i>
                </a>
                <a class="fl" target="_blank" href="tencent://message/?uin=&amp;Site=uelike&amp;Menu=yes">
                  <i class="fa fa-qq"></i>
                </a>
                <a id="mpbtn" class="fl" target="_blank" href="/weixin.jpg">
                  <i class="fa fa-weixin"></i>
                </a>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <v-container>
      <p>
        <span class="ellipsis">
          Copyright © 2021 LVC深圳市青禾科技有限公司所有版权
        </span>
      </p>
    </v-container>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#mcontact {
  min-height: 260px;
  background-color: @footer-bg;

  &.module {
    #contactlist:before {
      clear: both;
      display: table;
      content: "";
    }

    .module_container {
      padding: 85px 5px 50px;

      .container_header {
        .title {
          color: #eaeaea;
        }

        .subtitle {
          color: #999;
        }
      }
    }
  }

  .module_container:after {
    content: '';
    display: block;
    clear: both
  }

  .container_header {
    width: 190px;
    float: left;
    margin-right: 280px
  }

  .container_content {
    max-width: 700px;
    float: left;
    position: relative
  }

  #contactinfo {
    p {
      float: left;
      width: 290px;
      padding-right: 60px;
      margin-top: 14px;
      height: auto;
      font-size: 12px;
      line-height: inherit
    }

    div {
      position: absolute;
      left: 200px;
      margin-top: 10px;

      &:after {
        content: '关注';
        height: 20px;
        font-size: 16px;
        line-height: 20px;
        overflow: hidden;
        position: absolute;
        top: -56px;
        left: 0;
        // content: 'Follow';
      }

      a {
        background-color: transparent;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, .07);
        width: 36px;
        height: 36px;
        border-radius: 0;
        margin-right: 10px;

        &:hover {
          border: 1px solid transparent;
          border-radius: 0;
          background-color: @brand-primary;

          i {
            color: #fff;
          }
        }

        i {
          margin-top: 10px;
          transition: all .3s ease-out 0s;
          left: 2px;
          width: 16px;
          position: relative;
          margin: 10px 8px 8px;
        }
      }
    }

    h3 {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 25px;
      font-weight: 100
    }
  }

  .container_content {
    max-width: 1170px;
    float: none;

    #contactinfo {
      max-width: 1170px;
      position: relative;
      padding-left: 470px;
      top: -45px
    }
  }
}

.footer {
  border-top: 1px solid @md-grey-800;
  background-color: @footer-bg;

  p {
    line-height: 24px;
    height: 24px;
    text-align: center;
    margin: 0 auto;
  }

  span.ellipsis {
    display: inline;
    max-width: 70%
  }
}

.fl {
  float: left;
}
</style>
