import { Scene } from "phaser";
import { Screen } from "../Screen";
import { Stage } from "../Stage";

export class Game extends Scene {
    stage = new Stage();
    pixels = [];
    pixelIndex = 0;
    numPixels = Screen.width * Screen.height;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        for (let y = 0.5; y < Screen.height; y += 1) {
            for (let x = 0.5; x < Screen.width; x += 1) {
                this.pixels.push({ x, y, rectangle: null });
            }
        }
    }

    update(time, delta) {
        if (this.pixelIndex < this.numPixels) {
            let pixel = this.pixels[this.pixelIndex];
            const x = pixel.x;
            const y = pixel.y;
            const color = this.stage.getColor(x, y);
            if (pixel.rectangle === null) {
                pixel.rectangle = this.add.rectangle(x, y, 1, 1, color);
            } else {
                pixel.rectangle.fillColor = color;
            }
            this.pixelIndex += 1;
        } else {
            this.pixelIndex = 0;
            this.stage.reset();
        }
    }
}
