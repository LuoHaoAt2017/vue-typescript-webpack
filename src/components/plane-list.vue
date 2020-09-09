<template>
  <section class="plane-list">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(plane, index) in planes" :key="index">
        <plane-component :plane="plane" v-model="plane.checked" />
      </li>
    </ul>
    <div class="operation">
      <span class="increment" v-on:click="$emit('increase')"></span>
    </div>
  </section>  
</template>

<script lang="ts">
import { Ship } from "@/model";
import {
  Vue,
  Component,
  Prop,
  Watch,
  Mixins,
  Model,
} from "vue-property-decorator";
import { Checkbox } from "ant-design-vue";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import PlaneComponent from "@/components/plane-item";

@Component({
  name: "plane-list",
  components: {
    "a-checkbox": Checkbox,
    PlaneComponent,
  }
})      
export default class PlaneList extends Vue {
  @Prop()
  readonly planes: Array<any>;
  @Prop()
  readonly title: string;
}
</script>

<style lang="less" scope>
@import url("@/assets/less/common.less");
@main-color: #fff;
.plane-list {
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
    cursor: pointer;
    padding: 10px;
  }

  .increment {
    background-image: url("../assets/img/icon_add.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px 20px;
    padding: 10px;
    width: 20px;
    height: 20px;
  }
}
</style>
