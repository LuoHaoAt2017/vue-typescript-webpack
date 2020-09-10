import Home from "@/pages/home.vue";
import Fleet from "@/pages/fleet.vue";
import Plane from "@/pages/plane.vue";
import Car from "@/pages/car.vue";

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
  }
];

export default routes;
