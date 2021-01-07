<template>
  <div class="ccc-ccc">
    <a-button v-for="(item, index) in footerActions" :key="index">
      {{ item.label }}
    </a-button>
  </div>
</template>

<script lang="ts">
import FormBase from '../mixins/FormBase';
import { Mixins, Component } from "vue-property-decorator";
import { Button } from 'ant-design-vue';

@Component({
  name: 'ccc-ccc',
  components: {
    AButton: Button
  }
})
export default class CCCCCC extends Mixins(FormBase) {
  
}
</script>