// import * as _ from 'loadsh';
import {Ship, Frigate, Destroyer, Assault} from '@/model';

const frigates: Array<Ship> = [];
const destroyers: Array<Ship> = [];
const assaults: Array<Ship> = [];

class ShipService {

    createFrigate(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                const ship: Ship = new Frigate();
                frigates.push(ship);
                resolve([null, null]);
            }, 500);
        });
    }

    createDestroyer(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            const ship: Ship = new Destroyer();
            destroyers.push(ship);
            setTimeout(function() {
                resolve([null, []]);
            }, 500);
        });
    }

    createAssault(params: Object) {
        return new Promise<Array<any>>(function(resolve) {
            const ship: Ship = new Assault();
            assaults.push(ship);
            setTimeout(function() {
                resolve([null, []]);
            }, 500);
        });
    }

    searchFrigate() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, frigates]);
            }, 1000);
        });
    }

    searchDestroyer() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, destroyers]);
            }, 1000);
        });
    }

    searchAssaults() {
        return new Promise<Array<any>>(function(resolve) {
            setTimeout(function() {
                resolve([null, assaults]);
            }, 1000);
        });
    }
}

const service = new ShipService();

export default service;