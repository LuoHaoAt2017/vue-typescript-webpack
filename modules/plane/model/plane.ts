export abstract class Plane {
    id: string;    //编号
    name: string;   //名称
    length: number; //长度
    width: number;  //宽度
    weight: number; //吨位
    speed: number;  //航速
    nation: string; //国家
}

// 运输机
export class TransportPlane extends Plane {
    constructor() {
        super();
        this.name = '运输机';
        this.id = 'transport' + new Date().getTime().toString();
        this.weight = 5000;
    }
}

// 攻击机
export class AttackAircraft extends Plane {
    constructor() {
        super();
        this.name = '攻击机';
        this.id = 'attack' + new Date().getTime().toString();
        this.weight = 7500;
    }
}
