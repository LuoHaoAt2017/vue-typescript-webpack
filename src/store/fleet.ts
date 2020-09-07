import {ActionTree, MutationTree, GetterTree} from 'vuex';
import { Ship } from "@/model";
import {ship as service} from '@/service';

const UPDATE_FRIGATES = 'update_frigates';
const UPDATE_DESTROYERS = 'update_destroyers';
const UPDATE_ASSAULTS = 'update_assaults';

class FleetState {
    counter: number = 0;
    frigates: Array<Ship> = [];
    destroyers: Array<Ship> = [];
    assaults: Array<Ship> = [];
}

const fleet = {
    namespaced: true,
    state: new FleetState(),
    getters: {
        ships(state: FleetState): Array<Ship> {
            return [].concat(state.frigates, state.destroyers, state.assaults)
        }
    } as GetterTree<FleetState, any>,
    mutations: {
        [UPDATE_FRIGATES](state: FleetState, data: Array<Ship>) {
            state.frigates = data;
        },
        [UPDATE_DESTROYERS](state: FleetState, data: Array<Ship>) {
            state.destroyers = data;
        },
        [UPDATE_ASSAULTS](state: FleetState, data: Array<Ship>) {
            state.assaults = data;
        }
    } as MutationTree<FleetState>,
    actions: {
        async createFrigate({dispatch}, params) {
            const [err, res] = await service.createFrigate(params);
            if (!err) {
                dispatch('searchFrigate');
            }
        },
        async createDestroyer({dispatch}, params) {
            const [err, res] = await service.createDestroyer(params);
            if (!err) {
                dispatch('searchDestroyer');
            }
        },
        async createAssault({dispatch}, params) {
            const [err, res] = await service.createAssault(params);
            if (!err) {
                dispatch('searchAssaults');
            }
        },
        async searchFrigate({commit}) {
            const [err, res] = await service.searchFrigate();
            if (res) {
                commit(UPDATE_FRIGATES, res);
            } else {
                console.error(err);
            }
        },
        async searchDestroyer({commit}) {
            const [err, res] = await service.searchDestroyer();
            if (res) {
                commit(UPDATE_DESTROYERS, res);
            } else {
                console.error(err);
            }
        },
        async searchAssaults({commit}) {
            const [err, res] = await service.searchAssaults();
            if (res) {
                commit(UPDATE_ASSAULTS, res);
            } else {
                console.error(err);
            }
        }
    } as ActionTree<FleetState, any>
}

export default fleet;