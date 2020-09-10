<template>
  <div class="ship-container">
    <span>
      <a-checkbox :checked="checked" @change="onChange">合格</a-checkbox>
    </span>
    <img :src="ship.icon.src" :alt="ship.icon.alt" class="ship-icon" v-show="ship.checked" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Model } from "vue-property-decorator";
@Component({
  name: "ship-component",
})
export default class Ship extends Vue {
  @Model("change")
  readonly checked!: boolean;

  @Prop()
  ship!: Object;

  onChange(e: any) {
    this.$emit("change", e.target.checked);
  }
}
</script>

<style lang="less" scope>
.ship-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  .ship-icon {
    height: auto;
    width: 100%;
    border-radius: 4px;
    margin-top: 5px;
  }
}
</style>
