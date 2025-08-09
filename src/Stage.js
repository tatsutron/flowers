import { Screen } from "./Screen";
import { Flower } from "./Flower";
import { Ray } from "./Ray";
import { Vector } from "./Vector";

export class Stage {
    primitives = [];

    constructor() {
        this.reset();
    }

    reset() {
        this.primitives = [];
        let numFlowers = 100;
        let flowers = [];
        for (let i = 0; i < numFlowers; i += 1) {
            let flower = new Flower({
                position: new Vector({
                    x: Math.random() * Screen.width,
                    y: Math.random() * Screen.height,
                    z: -1000 * i,
                }),
                radius: Screen.width * 0.25,
            });
            flowers.push(flower);
        }
        for (let i = 0; i < numFlowers; i += 1) {
            let flower = flowers[i];
            for (let i = 0; i < flower.primitives.length; i += 1) {
                let primitive = flower.primitives[i];
                this.primitives.push(primitive);
            }
        }
    }

    getColor(x, y) {
        let ray = new Ray({
            origin: new Vector({
                x,
                y,
                z: 0,
            }),
            direction: new Vector({
                x: 0,
                y: 0,
                z: -1,
            }),
        });
        let tNearest = Number.MAX_VALUE;
        let nearestPrimitive = null;
        for (let i = 0; i < this.primitives.length; i += 1) {
            let primitive = this.primitives[i];
            switch (primitive.type) {
                case "sphere": {
                    let sphere = primitive;
                    let t = ray.intersect({ sphere });
                    if (t) {
                        if (t < tNearest) {
                            tNearest = t;
                            nearestPrimitive = sphere;
                        }
                    }
                    break;
                }
            }
        }
        if (nearestPrimitive !== null) {
            return nearestPrimitive.color;
        } else {
            return 0xffffff;
        }
    }
}
