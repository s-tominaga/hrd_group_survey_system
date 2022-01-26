<template>
  <v-app-bar class="indigo lighten-2" app dense dark>
    <v-app-bar-nav-icon
      dark
      @click="$store.commit('toggleDrawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>HRD Survey System</v-toolbar-title>
  </v-app-bar>
</template>
