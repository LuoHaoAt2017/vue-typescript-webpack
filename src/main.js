import "babel-polyfill";
import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import andt from "antd";
Vue.use(andt);
new Vue({
  el: "#app",
  router: router,
  store: store,
  render: (h) => h(App),
});
