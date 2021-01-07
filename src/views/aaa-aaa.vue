<template>
  <div class="aaa-aaa">
    <div class="header">
      <bbb-bbb></bbb-bbb>
    </div>
    <div class="content">
      <p>验证 Vue 混入特性是否能实现混入数据能够在不同组件之间共享</p>
      <a-radio-group @change="handleModechange">
        <a-radio-button value="View">查看</a-radio-button>
        <a-radio-button value="Edit">编辑</a-radio-button>
      </a-radio-group>
    </div>
    <div class="footer">
      <ccc-ccc></ccc-ccc>
    </div>
  </div>
</template>

<script lang="ts">
import { Button, Radio } from 'ant-design-vue';
import { Mixins, Component } from "vue-property-decorator";
import BBBBBB from './bbb-bbb.vue';
import CCCCCC from './ccc-ccc.vue';
import FormBase from '../mixins/FormBase';

@Component({
  name: 'aaa-aaa',
  components: {
    AButton: Button,
    ARadioButton: Radio.Button,
    ARadioGroup: Radio.Group,
  }
})
export default class AAAAAA extends Mixins(FormBase) {
  
}
</script>