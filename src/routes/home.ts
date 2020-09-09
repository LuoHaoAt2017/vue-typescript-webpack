import Home from "@/pages/home.vue";
import Fleet from "@/pages/fleet.vue";
import Plane from "@/pages/plane.vue";

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
  }
];

export default routes;
