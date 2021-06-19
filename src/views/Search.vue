<template>
  <section>
    <div class="page_module">
      <v-container>
        <v-text-field
          v-model="search"
          type="text"
          placeholder="搜索产品"
          :loading="loading"
          append-icon="mdi-magnify"
          @click:append="searchEvent"
          clearable
          rounded
          solo
        ></v-text-field>
        <div class="container_content" >
          <v-row>
            <template v-for="(item, index) in searchList">
              <v-col :key="item.id" cols="12" xs="6" md="6" lg="3" xl="3">
                <ProductItem class="wow fadeInUp" :data-wow-delay="`${index/10}s`" :options="item"></ProductItem>
              </v-col>
            </template>
          </v-row>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
  import ProductItem from '../components/ProductItem.vue'
  
  export default {
    components: {
      ProductItem
    },
    data() {
      return {
        search: '',
        loading: false,
        searchList: []
      }
    },
    methods: {
      searchEvent() {
        this.loading = true;

        setTimeout(() => {
          this.searchList = [{
            id: '202106001',
            title: '青禾1号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product01.png'
          }, {
            id: '202106002',
            title: '青禾2号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product02.png'
          }, {
            id: '202106003',
            title: '青禾3号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product03.png'
          }, {
            id: '202106004',
            title: '青禾4号',
            description: '清新  健康  激情  热爱',
            imgUrl: './product/product04.png'
          }]
          this.loading = false;
        },1000);
      }
    },
  }
</script>

<style lang="less" scoped>

</style>