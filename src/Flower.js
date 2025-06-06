export class Flower {
    primitives = [];

    constructor({ position, radius }) {
        this.primitives.push({
            type: "sphere",
            position,
            radius,
            color: 0x00ffff,
        });
    }
}
