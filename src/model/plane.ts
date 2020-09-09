import TransportIcon from "@/assets/img/transport.jpg";
import WarningIcon from "@/assets/img/warning.jpg";
import FighterIcon from "@/assets/img/fighter.jpg";

export abstract class Plane {
    id: string;    //编号
    name: string;   //名称
    length: number; //长度
    width: number;  //宽度
    weight: number; //吨位
    speed: number;  //航速
    nation: string; //国家
    icon: string;   //图片
    checked: boolean//合格
}

const icons: Array<any> = [
    {
        src: TransportIcon,
        alt: "transport",
    },
    {
        src: WarningIcon,
        alt: "warning",
    },
    {
        src: FighterIcon,
        alt: "fighter",
    },
];
// 运输机
export class Transport extends Plane {
    constructor() {
        super();
        this.name = '护卫舰';
        this.id = 'transport' + new Date().getTime().toString();
        this.weight = 5000;
        this.icon = icons[0];
        this.checked = true;
    }
}

// 预警机
export class Warning extends Plane {
    constructor() {
        super();
        this.name = '驱逐舰';
        this.id = 'warning' + new Date().getTime().toString();
        this.weight = 7500;
        this.icon = icons[1]
        this.checked = true;
    }
}

// 战斗机
export class Fighter extends Plane {
    constructor() {
        super();
        this.name = '攻击舰';
        this.id = 'fighter' + new Date().getTime().toString();
        this.weight = 17500;
        this.icon = icons[2];
        this.checked = true;
    }
}
