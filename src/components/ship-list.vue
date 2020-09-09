<template>
  <section class="ship-list">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(ship, index) in ships" :key="index">
					<ship-component :ship="ship" v-model="ship.checked"/>
        </li>
      </ul>
      <div class="operation">
        <span class="increment" v-on:click="$emit('increase')"></span>
      </div>
    </section>
</template>

<script lang="ts">
import { Ship } from "@/model";
import { Vue, Component, Prop, Watch, Mixins, Model
 } from "vue-property-decorator";
 import { Checkbox } from 'ant-design-vue'
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import ShipComponent from "@/components/ship-item.vue";
const fleetModule = namespace("Fleet");

@Component({
	name: "ship-list",
	components: {
		'a-checkbox': Checkbox,
		ShipComponent
  }
})
export default class  ShipList extends Vue {
  @Prop()
  readonly ships: Array<any>;
  @Prop()
  readonly title: string;

}
</script>

<style lang="less" scope>
@import url("@/assets/less/common.less");
@main-color: #fff;
  .ship-list {
    position: relative;
    min-height: 250px;
		.border-all(2px);
		width: 100%;
    text-align: center;
    margin-bottom: 20px;
    padding: 0 20px;
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
</style>
