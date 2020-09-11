import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "@/pages/home.vue";
import Car from "@/pages/car.vue";
import Fleet from "@/pages/fleet.vue";
import Plane from "@/pages/plane.vue";
import Rocket from "@/pages/rocket.vue";

const routes: Array<any> = [
  {
    path: "/",
    redirect: "/fleet",
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Fleet",
    path: "/fleet",
    component: Fleet,
  },
  {
    name: "Plane",
    path: "/plane",
    component: Plane
  },
  {
    name: "Car",
    path: "/car",
    component: Car
  },
  {
    name: "Rocket",
    path: "/rocket",
    component: Rocket
  }
];

const router = new VueRouter({
    mode: "hash",
    routes: routes
});

export default router;
