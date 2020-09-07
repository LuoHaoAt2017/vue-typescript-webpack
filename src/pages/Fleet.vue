<template>
    <div class="fleet container">
        <section class="ship-list">
            <h3>Frigate</h3>
            <ul class="frigate-list" v-if="frigates.length">
                <li  class="ship-card" v-for='(ship, index) in frigates' :key="ship.id">
                    {{index}} - {{ship.name}} - {{ship.weight}}
                    <img :src="icons[0].src" :alt="icons[0].alt" class="ship-icon">
                </li>
            </ul>
            <div class="operation">
                <span class="increment" v-on:click="increse('frigate')"></span>
                <!-- <button class="decrement" v-on:click="decrese('frigate')">-</button> -->
            </div>
        </section>

        <section class="ship-list">
            <h3>Destroyer</h3>
            <ul class="destroyer-list" v-if="destroyers.length">
                <li  class="ship-card" v-for='(ship, index) in destroyers' :key="ship.id">
                    {{index}} - {{ship.name}} - {{ship.weight}}
                    <img :src="icons[1].src" :alt="icons[1].alt" class="ship-icon">
                </li>
            </ul>
            <div class="operation">
                <span class="increment" v-on:click="increse('destroyer')"></span>
                <!-- <button class="decrement" v-on:click="decrese('destroyer')">-</button> -->
            </div>
        </section>

        <section class="ship-list">
            <h3>Assault</h3>
            <ul class="assault-list" v-if="assaults.length">
                <li class="ship-card" v-for='(ship, index) in assaults' :key="ship.id">
                    {{index}} - {{ship.name}} - {{ship.weight}}
                    <img :src="icons[2].src" :alt="icons[2].alt" class="ship-icon">
                </li>
            </ul>
            <div class="operation">
                <span class="increment" v-on:click="increse('assault')"></span>
                <!-- <button class="decrement" v-on:click="decrese('assault')">-</button> -->
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Ship} from '@/model';
    import Frigate from "@/assets/img/frigate.jpg";
    import Destroyer from "@/assets/img/destroyer.jpg";
    import Assault from "@/assets/img/assault.jpg";
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
    import {State, Getter, Mutation, Action, namespace} from 'vuex-class';
    const fleetModule = namespace('Fleet');

    @Component({
        name: 'Fleet'
    })
    export default class App extends Vue {
        // data
        counter: number = 10;
        icons: Array<any> = [
            {
                src: Frigate,
                alt: 'frigate'
            },
            {
                src: Destroyer,
                alt: 'destroyer'
            },
            {
                src: Assault,
                alt: 'assault'
            }
        ]

        // props
        @Prop() captain!: string;
        @Prop() commissar!: string;

        get totalShips() {
            const aaa = this.frigates.length + this.destroyers.length + this.assaults.length;
            return 1;
        }

        // watch
        @Watch('counter')
        counterList(cur: number, pre: number) {
            if(cur > 10) {
                // 超出预算
                window.alert('超出预算');
            } else {
                // 新建舰船
            }
        }

        // methods
        increse(option: string) {
            if (option === 'frigate') {
                this.createFrigate({});
            } else if (option === 'destroyer') {
                this.createDestroyer({});
            } else {
                this.createAssault({});
            }
        }

        decrese(option: string) {
            if (option === 'frigate') {
                this.createFrigate();
            } else if (option === 'destroyer') {
                this.createDestroyer();
            } else {
                this.createAssault();
            }
        }

        // state
        @fleetModule.State('frigates')
        frigates: Array<Ship>;
        @fleetModule.State('destroyers')
        destroyers: Array<Ship>;
        @fleetModule.State('assaults')
        assaults: Array<Ship>;

        // getter
        @fleetModule.Getter('ships')
        ships: Array<Ship>;

        // action
        @fleetModule.Action('createFrigate')
        createFrigate: any;
        @fleetModule.Action('createDestroyer')
        createDestroyer: any;
        @fleetModule.Action('createAssault')
        createAssault: any;

        @fleetModule.Action('searchFrigate')
        searchFrigate: any;
        @fleetModule.Action('searchDestroyer')
        searchDestroyer: any;
        @fleetModule.Action('searchAssaults')
        searchAssaults: any;

        async mounted() {
            await this.searchFrigate();
            await this.searchDestroyer();
            await this.searchAssaults();
        }
    }
</script>

<style lang="less" scope>
@import url("@/assets/less/common.less");
@main-color: #FFF;

.container {
    padding: 0 20px;
    background-color: @main-color;
    .ship-list {
        position: relative;
        margin: 20px auto;
        min-height: 250px;
        .border-all(2px);
        text-align: center;
        &:hover {
            box-shadow: 0 0 4px 2px #eeeeee;
        }

        .ship-card {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 20px;
            .ship-icon {
                height: auto;
                width: 400px;
                border-radius: 4px;
            }
        }
    }

    .operation {
        position: absolute;
        top: 0;
        left: 0;

        .increment, .decrement {
            font-size: 20px;
            display: inline-block;
            outline: none;
            border: 1px solid #eeeeee;
            cursor: pointer;
            padding: 5px;
        }

        .increment {
            background-image: url("../assets/img/icon_add.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 40px 40px;
            width: 40px;
            height: 40px;
        }
    }
}
</style>
