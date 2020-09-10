import { Component } from "vue-property-decorator";
import { CarController } from "../controller/car-controller";

@Component({
  name: "car-item",
})
export default class Car extends CarController {
  logo: string = "大众汽车公司";

  render() {
    return (
      <div class="car-item">
        <img src={this.carItem.src} alt={this.carItem.alt} class="car-icon" />
        <p class="car-text">{this.carItem.description}</p>
      </div>
    );
  }

  mounted() {
    console.log(this.position);
  }
}
