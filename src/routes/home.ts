import Home from '@/pages/Home.vue';
import Fleet from '@/pages/Fleet.vue';

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
