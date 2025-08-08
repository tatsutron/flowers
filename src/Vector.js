export class Vector {
    x = null;
    y = null;
    z = null;

    constructor({ x, y, z }) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add({ rhs }) {
        return new Vector({
            x: this.x + rhs.x,
            y: this.y + rhs.y,
            z: this.z + rhs.z,
        });
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

    negative() {
        return new Vector({
            x: -this.x,
            y: -this.y,
            z: -this.z,
        });
    }

    round() {
        return new Vector({
            x: Math.round(this.x),
            y: Math.round(this.y),
            z: Math.round(this.z),
        });
    }
}
