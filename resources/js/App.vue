<template>
  <v-app>
    <app-header></app-header>
    <app-drawer></app-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-drawer": Drawer,
    "app-footer": Footer,
  },
};
</script>
