import { Vue, Prop, Component } from 'vue-property-decorator'
import { Plane } from '@/model';

@Component
export default class PlaneItem extends Vue {

  @Prop()
  plane: Plane;

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }

  onClick() {

  }

  onNativeClick() {

  }
}