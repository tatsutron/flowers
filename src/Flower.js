import { Vector } from "./Vector";
import { Matrix } from "./Matrix";

import { Screen } from "./Screen";

export class Flower {
    numPetals = 5;
    centerColors = [0xffb6c1, 0x90ee90, 0xffdbbb, 0xdab1da, 0xffffc5, 0xadd8e6];
    petalColors = [0xffdae0, 0xc7f6c7, 0xffeddd, 0xecd8ec, 0xffffe2, 0xd6ebf2];
    primitives = [];

    constructor({ position, radius }) {
        let colorIndex = Math.floor(Math.random() * this.centerColors.length);

        let centerRadius = radius / 4;
        this.primitives.push({
            type: "sphere",
            position: position,
            radius: centerRadius / 2,
            color: this.centerColors[colorIndex],
        });

        let theta0 = Math.floor(Math.random() * 360);
        let petalAngles = [theta0];
        for (let i = 1; i < this.numPetals; i += 1) {
            let theta1 = theta0 + (360 / this.numPetals) * i;
            petalAngles.push(theta1);
        }
        for (let i = 0; i < this.numPetals; i += 1) {
            petalAngles[i] = petalAngles[i] % 360;
        }
        for (let i = 0; i < this.numPetals; i += 1) {
            petalAngles[i] = petalAngles[i] * (Math.PI / 180);
        }

        let p0 = position.add({
            rhs: new Vector({
                x: centerRadius,
                y: 0,
                z: -10,
            }),
        });
        for (let i = 0; i < this.numPetals; i += 1) {
            let r = Matrix.rotation({
                params: {
                    z: petalAngles[i],
                },
            });

            let p1 = p0.subtract({ rhs: position });
            p1 = r.multiply({ v: p1 });
            p1 = p1.add({ rhs: position });

            this.primitives.push({
                type: "sphere",
                position: p1.round(),
                radius: radius / 6,
                color: this.petalColors[colorIndex],
            });
        }
    }
}
