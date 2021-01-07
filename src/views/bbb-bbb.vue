<template>
  <div class="bbb-bbb">
    <a-button v-for="(item, index) in headerActions" :key="index">
      {{ item.label }}
    </a-button>
  </div>
</template>

<script lang="ts">
import FormBase from '../mixins/FormBase';
import { Mixins, Component } from "vue-property-decorator";

@Component({
  name: 'bbb-bbb'
})
export default class BBBBBB extends Mixins(FormBase) {
  
}
</script>