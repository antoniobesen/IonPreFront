import Vue from "vue";
import VueResource from "vue-resource";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
