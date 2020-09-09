<template>
  <div class="app">
    <div class="header">
      <router-link to="/home">首页</router-link>|
      <router-link to="/fleet">舰船</router-link>|
      <router-link to="/plane">飞机</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from "vue-property-decorator";
@Component({
  name: "App",
})
export default class App extends Vue {}
</script>

<style>
.header {
  font-size: 20px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
