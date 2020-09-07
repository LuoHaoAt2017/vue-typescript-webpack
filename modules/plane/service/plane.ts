import {Plane, TransportPlane, AttackAircraft} from '../model';

const transportPlanes: Array<Plane> = [];
const attackAircrafts: Array<Plane> = [];

class PlaneService {

    createTransportPlane(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                const plane: Plane = new TransportPlane();
                transportPlanes.push(plane);
                resolve([null, null]);
            }, 500);
        });
    }

    createAttackAircraft(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            const plane: Plane = new AttackAircraft();
            attackAircrafts.push(plane);
            setTimeout(function() {
                resolve([null, []]);
            }, 500);
        });
    }

    searchTransportPlane() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, transportPlanes]);
            }, 1000);
        });
    }

    searchAttackAircraft() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, attackAircrafts]);
            }, 1000);
        });
    }
}

const service = new PlaneService();

export default service;