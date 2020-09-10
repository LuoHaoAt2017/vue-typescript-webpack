<template>
  <div class="car-container">
    <car-item></car-item>
  </div>
</template>

<script lang="ts">
import CarItem from "@/components/car-item";
import { Vue, Component, Provide } from "vue-property-decorator";

@Component({
  components: {
    CarItem,
  },
})
export default class Car extends Vue {
  @Provide()
  car: any = {
    src: require("@/assets/img/car.jpg").default,
    alt: "大众途锐",
    description: "克服空间",
  };

  mounted() {
    // const url = `/${process.env.BASE_URL}/Action/Car`;
    // window.fetch(url).then(() => {});
  }
}
</script>

<style lang="less">
.car-container {
  padding: 0 20px;
  .car-item {
    .car-icon {
      width: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
    .car-text {
      text-align: center;
    }
  }
}
</style>>