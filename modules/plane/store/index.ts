import {ActionTree, MutationTree, GetterTree} from 'vuex';
import { Plane } from "../model";
import {plane as service} from '../service';

const TransportPlane = 'update_transport_plane';
const AttackAircraft = 'update_attack_aircraft';

class PlaneState {
    counter: number = 0;
    transport_plane: Array<Plane> = [];
    attack_aircraft: Array<Plane> = [];
}

const plane = {
    namespaced: true,
    state: new PlaneState(),
    getters: {
    } as GetterTree<PlaneState, any>,
    mutations: {
        [TransportPlane](state: PlaneState, data: Array<Plane>) {
            state.transport_plane = data;
        },
        [AttackAircraft](state: PlaneState, data: Array<Plane>) {
            state.attack_aircraft = data;
        },
    } as MutationTree<PlaneState>,
    actions: {
        async createTransportPlane({dispatch}, params) {
            const [err, res] = await service.createTransportPlane(params);
            if (!err) {
                dispatch('searchTransportPlane');
            }
        },
        async createAttackAircraft({dispatch}, params) {
            const [err, res] = await service.createAttackAircraft(params);
            if (!err) {
                dispatch('searchAttackAircraft');
            }
        },
        async searchTransportPlane({commit}) {
            const [err, res] = await service.searchTransportPlane();
            if (res) {
                commit(TransportPlane, res);
            } else {
                console.error(err);
            }
        },
        async searchAttackAircraft({commit}) {
            const [err, res] = await service.searchAttackAircraft();
            if (res) {
                commit(AttackAircraft, res);
            } else {
                console.error(err);
            }
        },
    } as ActionTree<PlaneState, any>
}

export default plane;