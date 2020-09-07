import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRoutes from './home';

Vue.use(VueRouter);

const routes: Array<any> = [
    ...homeRoutes
];

const router = new VueRouter({
    routes: routes
});

export default router;
