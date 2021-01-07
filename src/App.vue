<template>
  <div class="app">
    <div class="header">
      <!-- <router-link to="/home">首页</router-link>&nbsp;|
      <router-link to="/rocket">火箭</router-link>&nbsp;|
      <router-link to="/fleet">舰船</router-link>&nbsp;|
      <router-link to="/plane">飞机</router-link>&nbsp;|
      <router-link to="/car">汽车</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins, Provide } from "vue-property-decorator";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  name: "App",
})
export default class App extends Vue {
  beforeRouteEnter(to, from, next) {
    next();
  }
  mounted() {
    // ProvidePlugin
    $(".app").click(function () {
      console.log("hello jquery");
    });
  }
}
</script>

<style>
.header {
  font-size: 20px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
