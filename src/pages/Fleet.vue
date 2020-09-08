<template>
  <div class="fleet container">
    <section class="ship-list">
      <h3>Frigate</h3>
      <ul class="frigate-list" v-if="frigates.length">
        <li v-for="(ship, index) in frigates" :key="index">
					<ship-component :ship="ship" v-model="ship.checked"/>
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
        <li class="ship-card" v-for="(ship, index) in destroyers" :key="index">
					<ship-component :ship="ship" v-model="ship.checked"/>
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
        <li class="ship-card" v-for="(ship, index) in assaults" :key="index">
					<ship-component :ship="ship" v-model="ship.checked"/>
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
import { Ship } from "@/model";
import { Vue, Component, Prop, Watch, Mixins, Model
 } from "vue-property-decorator";
 import { Checkbox } from 'ant-design-vue'
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import ShipComponent from "@/components/ship.vue";
const fleetModule = namespace("Fleet");

@Component({
	name: "Fleet",
	components: {
		'a-checkbox': Checkbox,
		ShipComponent
	}
})
export default class App extends Vue {
  // data
  counter: number = 10;

  // props
  @Prop() captain!: string;
	@Prop() commissar!: string;


  get totalShips() {
    const aaa =
      this.frigates.length + this.destroyers.length + this.assaults.length;
    return 1;
  }

  // watch
  @Watch("counter")
  counterList(cur: number, pre: number) {
    if (cur > 10) {
      // 超出预算
      window.alert("超出预算");
    } else {
      // 新建舰船
    }
  }

  // methods
  increse(option: string) {
    if (option === "frigate") {
      this.createFrigate({});
    } else if (option === "destroyer") {
      this.createDestroyer({});
    } else {
      this.createAssault({});
    }
  }

  decrese(option: string) {
    if (option === "frigate") {
      this.createFrigate();
    } else if (option === "destroyer") {
      this.createDestroyer();
    } else {
      this.createAssault();
    }
  }

  // state
  @fleetModule.State("frigates")
  frigates: Array<Ship>;
  @fleetModule.State("destroyers")
  destroyers: Array<Ship>;
  @fleetModule.State("assaults")
  assaults: Array<Ship>;

  // getter
  @fleetModule.Getter("ships")
  ships: Array<Ship>;

  // action
  @fleetModule.Action("createFrigate")
  createFrigate: any;
  @fleetModule.Action("createDestroyer")
  createDestroyer: any;
  @fleetModule.Action("createAssault")
  createAssault: any;

  @fleetModule.Action("searchFrigate")
  searchFrigate: any;
  @fleetModule.Action("searchDestroyer")
  searchDestroyer: any;
  @fleetModule.Action("searchAssaults")
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
@main-color: #fff;

.container {
  padding: 0 20px;
  background-color: @main-color;
  .ship-list {
    position: relative;
    margin: 20px auto;
    min-height: 250px;
		.border-all(2px);
		width: 100%;
    text-align: center;
    &:hover {
      box-shadow: 0 0 4px 2px #eeeeee;
    }
  }

  .operation {
    position: absolute;
    top: 0;
    left: 0;

    .increment,
    .decrement {
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
      background-size: 20px 20px;
      padding: 5px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
