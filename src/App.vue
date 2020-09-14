<template>
  <div class="app"></div>
</template>

<script lang="ts">
import { Vue, Component, Mixins, Provide } from "vue-property-decorator";
import _ from "lodash";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  name: "App",
})
export default class App extends Vue {
  mounted() {
    (window as any).matrix();
  }
}
</script>

<style lang="less">
</style>
