export class Vector {
    x = 0;
    y = 0;
    z = 0;

    constructor({ x, y, z }) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    subtract({ rhs }) {
        return new Vector({
            x: this.x - rhs.x,
            y: this.y - rhs.y,
            z: this.z - rhs.z,
        });
    }

    multiply({ scalar }) {
        return new Vector({
            x: this.x * scalar,
            y: this.y * scalar,
            z: this.z * scalar,
        });
    }

    magnitude() {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        return Math.sqrt(x * x + y * y + z * z);
    }

    dot({ rhs }) {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        return x * rhs.x + y * rhs.y + z * rhs.z;
    }
}
