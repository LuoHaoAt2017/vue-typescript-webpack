import Vue from 'vue';
import Vuex from 'vuex';
import FleetModule from './fleet';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Fleet: FleetModule,
    }
});

export default store;
