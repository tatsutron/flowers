import { Vector } from "./Vector";

export class Ray {
    origin = null;
    direction = null;

    constructor({ origin, direction }) {
        this.origin = origin;
        this.direction = direction;
    }

    intersect({ sphere }) {
        let magnitude = this.direction.magnitude();
        let a = magnitude * magnitude;
        let d = this.direction.multiply({ scalar: 2 });
        let v = this.origin.subtract({ rhs: sphere.position });
        let b = d.dot({ rhs: v });
        let c = v.magnitude() * v.magnitude() - sphere.radius * sphere.radius;
        let det = b * b - 4 * a * c;
        if (det < 0) {
            return null;
        }
        let detSqrt = Math.sqrt(det);
        let tPlus = (-b + detSqrt) / (a * 2);
        if (tPlus < 0) {
            return null;
        }
        let tMinus = (-b - detSqrt) / (a * 2);
        return tMinus < 0 ? tPlus : tMinus;
    }
}
