require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    components: { App },
    template: '<App/>'
});
