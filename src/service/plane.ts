import {Plane, Transport, Warning, Fighter} from '@/model';

const transports: Array<Plane> = [];
const warnings: Array<Plane> = [];
const fighters: Array<Plane> = [];

class PlaneService {

    createTransport(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                const ship: Plane = new Transport();
                transports.push(ship);
                resolve([null, null]);
            }, 500);
        });
    }

    createWarning(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            const ship: Plane = new Warning();
            warnings.push(ship);
            setTimeout(function() {
                resolve([null, []]);
            }, 500);
        });
    }

    createFighter(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            const ship: Plane = new Fighter();
            fighters.push(ship);
            setTimeout(function() {
                resolve([null, []]);
            }, 500);
        });
    }

    searchTransport() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, transports]);
            }, 1000);
        });
    }

    searchWarning() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, warnings]);
            }, 1000);
        });
    }

    searchFighter() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, fighters]);
            }, 1000);
        });
    }
}

const service = new PlaneService();

export default service;