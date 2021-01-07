import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'FormBase'
})
export default class FormBase extends Vue {
  headerActions: any[] = [];

  footerActions: any[] = [];

  handleModechange(value) {
    if (value === 'View') {
      this.headerActions = [{
        label: '打印',
        value: 'Print'
      }, {
        label: '删除',
        value: 'Delete'
      }];
      this.footerActions = [];
    } else {
      this.headerActions = [{
        label: '打印',
        value: 'Print'
      }, {
        label: '删除',
        value: 'Delete'
      }];
      this.footerActions = [{
        label: '提交',
        value: 'Submit'
      }, {
        label: '暂存',
        value: 'Stash'
      }];
    }
  }
}
