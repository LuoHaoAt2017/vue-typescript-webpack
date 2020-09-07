import Vue from 'vue';
import App from './pages/App.vue';
import store from './store';
import router from './routes';
import '@/assets/css/reset.css';
import '@/assets/less/common.less';
import '@/service/index';

new Vue({
    el: "#app",
    store: store,
    router: router,
    render: h => h(App)
});
