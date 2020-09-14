<template>
  <div class="home">
    <a-button>{{ msg }}</a-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Hello Home",
    };
  },
  mounted() {
    console.log("hello");
  },
};
</script>

<style lang="less">
</style>
