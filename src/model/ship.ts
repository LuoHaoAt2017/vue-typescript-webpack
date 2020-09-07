export abstract class Ship {
    id: string;    //编号
    name: string;   //名称
    length: number; //长度
    width: number;  //宽度
    weight: number; //吨位
    speed: number;  //航速
    nation: string; //国家
}

// 护卫舰
export class Frigate extends Ship {
    constructor() {
        super();
        this.name = '护卫舰';
        this.id = 'frigate' + new Date().getTime().toString();
        this.weight = 5000;
    }
}

// 驱逐舰
export class Destroyer extends Ship {
    constructor() {
        super();
        this.name = '驱逐舰';
        this.id = 'destroyer' + new Date().getTime().toString();
        this.weight = 7500;
    }
}

// 攻击舰
export class Assault extends Ship {
    constructor() {
        super();
        this.name = '攻击舰';
        this.id = 'assault' + new Date().getTime().toString();
        this.weight = 17500;
    }
}
