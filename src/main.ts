import "babel-polyfill";
import Vue from 'vue';
import App from './App.vue';
import '../lib/matrix.js';
new Vue({
    el: "#app",
    render: h => h(App)
});
