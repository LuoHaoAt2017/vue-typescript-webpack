import { Vue, Inject  } from "vue-property-decorator";

export class CarController extends Vue {
  @Inject({
    default: {
      color: '#000',
      background: "#fff"
    }
  })
  readonly theme: Object;

  @Inject({
    from: 'car',
    default: {
      src: '',
      alt: '',
      description: '',
    }
  })
  readonly carItem: any;

  position: any = {
    x: 0,
    y: 0,
    z: 0
  }

  mounted() {
    // console.log(this.logo);
  }
}