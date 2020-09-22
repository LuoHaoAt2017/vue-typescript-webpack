<template>
  <div class="home">
    <!-- <a-button>{{ msg }}</a-button> -->
    <i class="fa fa-spinner fa-spin"></i>
    <i class="fa fa-circle-o-notch fa-spin"></i>
    <i class="fa fa-refresh fa-spin"></i>
    <i class="fa fa-cog fa-spin"></i>
    <i class="fa fa-spinner fa-pulse"></i>
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
