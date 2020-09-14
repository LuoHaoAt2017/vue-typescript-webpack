<template>
  <div class="app">{{ msg }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  mounted() {
    console.log("hello");
  },
};
</script>

<style lang="less">
</style>
