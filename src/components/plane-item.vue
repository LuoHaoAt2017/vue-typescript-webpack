<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { Plane } from '@/model';

@Component({
  name: 'Plane'
})
export default class PlaneItem extends Vue {

  @Prop()
  plane: Plane;

  render(createElement: Function) {
    return createElement('div', 'hello plane');
  }
}
</script>