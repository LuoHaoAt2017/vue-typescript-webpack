<template>
  <div class="ship container"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({
  name: "Ship",
})
export default class Ship extends Vue {}
</script>

<style lang="less" scope>
.container {
}
</style>
