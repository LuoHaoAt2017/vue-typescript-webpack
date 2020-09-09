import "babel-polyfill";
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.css';
import '@/assets/less/common.less';
import '@/service/index';

Vue.use(antd);

new Vue({
    el: "#app",
    store: store,
    router: router,
    render: h => h(App)
});
