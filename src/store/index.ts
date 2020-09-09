import Vue from 'vue';
import Vuex from 'vuex';
import FleetModule from './fleet';
import PlaneModule from './plane';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Fleet: FleetModule,
        Plane: PlaneModule,
    }
});

export default store;
