<template>
  <section>
    <v-app-bar absolute color="indigo darken-2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="logo">
        <img src="@/assets/logo.png" alt="LVC" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <router-link to="/search"><v-icon>mdi-magnify</v-icon></router-link>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary dark>
      <v-list dense>
        <v-list-item
          :class="item.active ? 'menu-item active' : 'menu-item'"
          v-for="item in siderMenu"
          :key="item.title"
          link
        >
          <v-list-item-content>
            <router-link :to="item.url">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapGetters(['siderMenu']),
  },
};
</script>

<style lang="less" scoped>
.logo {
  width: 100%;
  text-align: center;
}
.menu-item {
  .v-list-item__content {
    padding: 15px 0 !important;
  }
  .v-list-item__title {
    font-size: 1.2rem !important;
    line-height: 1.2 !important;
  }
  &.active {
    background: @brand-primary;
  }
  a {
    color: @md-white;
  }
}
</style>