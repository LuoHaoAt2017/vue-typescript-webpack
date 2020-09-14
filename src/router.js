import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
