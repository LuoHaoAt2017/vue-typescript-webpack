import {ActionTree, MutationTree, GetterTree} from 'vuex';
import { Plane } from "@/model";
import {plane as service} from '@/service';

const UPDATE_TRANSPORT = 'update_transport';
const UPDATE_WARNING = 'update_warning';
const UPDATE_FIGHTER = 'update_fighter';

class PlaneState {
    counter: number = 0;
    transportPlanes: Array<Plane> = [];
    warningPlanes: Array<Plane> = [];
    fighterPlanes: Array<Plane> = [];
}

export default {
    namespaced: true,
    state: new PlaneState(),
    getters: {
        planes(state: PlaneState): Array<Plane> {
            return [].concat(state.transportPlanes, state.warningPlanes, state.fighterPlanes)
        }
    } as GetterTree<PlaneState, any>,
    mutations: {
        [UPDATE_TRANSPORT](state: PlaneState, data: Array<Plane>) {
            state.transportPlanes = data;
        },
        [UPDATE_WARNING](state: PlaneState, data: Array<Plane>) {
            state.warningPlanes = data;
        },
        [UPDATE_FIGHTER](state: PlaneState, data: Array<Plane>) {
            state.fighterPlanes = data;
        }
    } as MutationTree<PlaneState>,
    actions: {
        async createTransport({dispatch}, params) {
            const [err, res] = await service.createTransport(params);
            if (!err) {
                dispatch('searchTransport');
            }
        },
        async createWarning({dispatch}, params) {
            const [err, res] = await service.createWarning(params);
            if (!err) {
                dispatch('searchWarning');
            }
        },
        async createFighter({dispatch}, params) {
            const [err, res] = await service.createFighter(params);
            if (!err) {
                dispatch('searchFighter');
            }
        },
        async searchTransport({commit}) {
          const [err, res] = await service.searchTransport();
          if (res) {
              commit(UPDATE_TRANSPORT, res);
          } else {
              console.error(err);
          }
        },
      async searchWarning({commit}) {
          const [err, res] = await service.searchWarning();
          if (res) {
              commit(UPDATE_WARNING, res);
          } else {
              console.error(err);
          }
      },
      async searchFighter({commit}) {
          const [err, res] = await service.searchFighter();
          if (res) {
              commit(UPDATE_FIGHTER, res);
          } else {
              console.error(err);
          }
      }
    } as ActionTree<PlaneState, any>
}