import Home from '@/pages/home.vue';
import Fleet from '@/pages/fleet.vue';

const routes: Array<any> = [
    {
        path: '/',
        redirect: '/fleet'
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Fleet',
        path: '/fleet',
        component: Fleet
    }
];

export default routes;
