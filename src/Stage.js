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
        let flower = new Flower({
            position: new Vector({
                x: Screen.width / 2,
                y: Screen.height / 2,
                z: 0,
            }),
            radius: Screen.width * 0.5,
        });
        for (let i = 0; i < flower.primitives.length; i += 1) {
            let primitive = flower.primitives[i];
            this.primitives.push(primitive);
        }
    }

    getColor(x, y) {
        let ray = new Ray({
            origin: new Vector({
                x,
                y,
                z: 999999,
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
            return 0xff00ff;
        }
    }
}
