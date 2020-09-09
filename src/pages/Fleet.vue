<template>
  <div class="container">
    <section class="search-wrapper">
      <input class="lg-input" v-focus />
    </section>
    <section class="ships-wrapper">
      <ship-list :ships="frigates" title="护卫舰" @increase="() => onIncrese('frigate')"></ship-list>
      <ship-list :ships="destroyers" title="驱逐舰" @increase="() => onIncrese('destroyer')"></ship-list>
      <ship-list :ships="assaults" title="攻击舰" @increase="() => onIncrese('assault')"></ship-list>
    </section>
  </div>
</template>

<script lang="ts">
import { Ship } from "@/model";
import { Checkbox } from "ant-design-vue";
import ShipList from "@/components/ship-list.vue";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import {
  Vue,
  Component,
  Prop,
  Watch,
  Mixins,
  Model,
} from "vue-property-decorator";
const fleetModule = namespace("Fleet");

@Component({
  name: "Fleet",
  components: {
    Checkbox,
    ShipList,
  },
  directives: {
    focus: {
      bind: function (el: HTMLElement, binding: any) {
        console.log("只调用一次，指令第一次绑定到元素时调用。");
        const colors = ["#f00", "#0f0", "#00f"];
        let i = 0;
        setInterval(() => {
          i = i % colors.length;
          el.style.borderColor = colors[i++];
        }, 500);
      },
      inserted: function (el: HTMLElement, binding: any) {
        el.focus();
        console.log("被绑定元素插入父节点时调用。");
      },
      update: function (el: HTMLElement, binding: any) {
        console.log("所在组件的 VNode 更新时调用。");
      },
      unbind: function (el: HTMLElement, binding: any) {
        console.log("只调用一次，指令与元素解绑时调用。");
      },
    },
    increase: {
      // bind和inserted区分不开
      bind: function (el: HTMLElement, binding: any) {
        console.log("只调用一次，指令第一次绑定到元素时调用。");
      },
      inserted: function (el: HTMLElement, binding: any) {
        console.log("被绑定元素插入父节点时调用。");
      },
      update: function (el: HTMLElement, binding: any) {
        const cur = binding.value;
        const pre = binding.oldValue;
        console.log("cur: ", cur, " pre: ", pre);
        console.log("所在组件的 VNode 更新时调用。");
      },
      unbind: function (el: HTMLElement, binding: any) {
        console.log("只调用一次，指令与元素解绑时调用。");
      },
    },
  },
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
  onIncrese(option: string) {
    if (option === "frigate") {
      this.createFrigate({});
    } else if (option === "destroyer") {
      this.createDestroyer({});
    } else {
      this.createAssault({});
    }
  }

  // state
  @fleetModule.State("frigates")
  frigates: Array<Ship>;
  @fleetModule.State("destroyers")
  destroyers: Array<Ship>;
  @fleetModule.State("assaults")
  assaults: Array<Ship>;

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
}
</script>

<style lang="less" scope>
@import url("@/assets/less/common.less");
@main-color: #fff;

.container {
  padding: 20px;
  background-color: @main-color;
  overflow-y: scroll;
  .search-wrapper {
    margin-bottom: 10px;
    .lg-input {
      width: 100%;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px 10px;
    }
  }

  .ships-wrapper {
    width: 100%;
  }
}
</style>
