<template>
  <div class="container">
    <section class="plane-wrapper">
      <plane-list :planes="transportPlanes" title="运输机" @increase="() => onIncrese('transport')"></plane-list>
      <plane-list :planes="warningPlanes" title="预警机" @increase="() => onIncrese('warning')"></plane-list>
      <plane-list :planes="fighterPlanes" title="战斗机" @increase="() => onIncrese('fighter')"></plane-list>
    </section>
  </div>
</template>

<script lang="ts">
import { Plane } from "@/model";
import { Checkbox } from "ant-design-vue";
import planeList from "@/components/plane-list.vue";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import {
  Vue,
  Component,
  Prop,
  Watch,
  Mixins,
  Model,
} from "vue-property-decorator";
const planeModule = namespace("Plane");

@Component({
  name: "Plane",
  components: {
    planeList,
  },
})
export default class App extends Vue {
  // data
  counter: number = 10;

  // props
  @Prop() captain!: string;
  @Prop() commissar!: string;

  // methods
  onIncrese(option: string) {
    if (option === "transport") {
      this.createTransport({});
    } else if (option === "warning") {
      this.createWarning({});
    } else {
      this.createFighter({});
    }
  }

  // state
  @planeModule.State("transportPlanes")
  transportPlanes: Array<Plane>;
  @planeModule.State("warningPlanes")
  warningPlanes: Array<Plane>;
  @planeModule.State("fighterPlanes")
  fighterPlanes: Array<Plane>;

  // action
  @planeModule.Action("createTransport")
  createTransport: any;
  @planeModule.Action("createWarning")
  createWarning: any;
  @planeModule.Action("createFighter")
  createFighter: any;
}
</script>

<style lang="less" scope>
@import url("@/assets/less/common.less");
@main-color: #fff;
.container {
  padding: 20px;
  background-color: @main-color;
  overflow-y: scroll;

  .planes-wrapper {
    width: 100%;
  }
}
</style>
