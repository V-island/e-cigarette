<template>
  <section>
    <BannerPreview :options='banner'/>
    <div class="page_module">
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in iconList" :key="index" cols="12" sm="4">
            <div class="icon-item">
              <div class="icon" :style="{backgroundImage: `url(${item.url})`}"></div>
              <div class="info">
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.subtitle}}</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(item, index) in contactList" :key="index" cols="12" sm="4">
            <div class="contact-item">
              <p>售后微信：{{item.wechat}}</p>
              <p>售后电话：{{item.telephone}}</p>
              <p>邮箱：{{item.mailbox}}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
  import WowMixin from "@mixins/WowMixin";
  import BannerPreview from '../components/BannerPreview.vue'

  export default {
    mixins: [WowMixin],
    components: {
      BannerPreview
    },
    data() {
      return {
        banner: {
          name: '联系',
          url: './banner/banner_contact.png'
        },
        iconList: [
          {
            title: '客服售后',
            subtitle: '为您提供最佳解决方案',
            url: './icon/icon_contact01.png'
          },{
            title: '开设专卖店',
            subtitle: '邀请您与我们成为伙伴',
            url: './icon/icon_contact02.png'
          },{
            title: '联系我们',
            subtitle: '随时与您保持联系',
            url: './icon/icon_contact03.png'
          }
        ],
        contactList: [{
          wechat: 'qinghe001',
          telephone: '0755-87654321',
          mailbox: 'shery@qinhe.com'
        },{
          wechat: 'qinghe001',
          telephone: '0755-87654321',
          mailbox: 'shery@qinhe.com'
        },{
          wechat: 'qinghe001',
          telephone: '0755-87654321',
          mailbox: 'shery@qinhe.com'
        }]
      }
    },
  }
</script>

<style lang="less" scoped>
.icon-item{
  .flexbox();
  .flex-direction(row);
  .align-items(center);

  background: #1e1e1e;
  padding: 30px 20px;
  margin: 0 5px;

  >.icon{
    .background-imager();
    width: 50px;
    height: 50px;
    margin: 0 20px;
  }
  >.info{
    padding-right: 20px;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 0 auto;
      position: relative;
      color: #fff;
    }
    .subtitle {
      .text-line-clamp(1);
      margin: 4px 0 0;
      font-size: 14px;
      text-transform: uppercase;
      color: #999;
    }
  }
}
.contact-item{
  padding: 20px 40px;

  >p {
    margin: 4px 0 0;
    font-size: 16px;
    line-height: 2;
    text-transform: uppercase;
    color: #7e7e7e;
  }
}
</style>