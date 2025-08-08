import { Vector } from "./Vector";

export class Matrix {
    m = null;

    constructor({ _00, _01, _02, _10, _11, _12, _20, _21, _22 }) {
        this.m = [
            [_00, _01, _02],
            [_10, _11, _12],
            [_20, _21, _22],
        ];
    }

    row({ index }) {
        switch (index) {
            case 0:
                return new Vector({
                    x: this.m[0][0],
                    y: this.m[0][1],
                    z: this.m[0][2],
                });
            case 1:
                return new Vector({
                    x: this.m[1][0],
                    y: this.m[1][1],
                    z: this.m[1][2],
                });
            case 2:
                return new Vector({
                    x: this.m[2][0],
                    y: this.m[2][1],
                    z: this.m[2][2],
                });
            default:
                return null;
        }
    }

    column({ index }) {
        switch (index) {
            case 0:
                return new Vector({
                    x: this.m[0][0],
                    y: this.m[1][0],
                    z: this.m[2][0],
                });
            case 1:
                return new Vector({
                    x: this.m[0][1],
                    y: this.m[1][1],
                    z: this.m[2][1],
                });
            case 2:
                return new Vector({
                    x: this.m[0][2],
                    y: this.m[1][2],
                    z: this.m[2][2],
                });
            default:
                return null;
        }
    }

    multiply({ v }) {
        return new Vector({
            x: this.row({ index: 0 }).dot({ rhs: v }),
            y: this.row({ index: 1 }).dot({ rhs: v }),
            z: this.row({ index: 2 }).dot({ rhs: v }),
        });
    }

    static rotation({ params }) {
        if (params.x !== undefined) {
            let theta = params.x;
            let sin = Math.sin(theta);
            let cos = Math.cos(theta);
            return new Matrix({
                _00: 1,
                _01: 0,
                _02: 0,
                _10: 0,
                _11: cos,
                _12: -sin,
                _20: 0,
                _21: sin,
                _22: cos,
            });
        } else if (params.y !== undefined) {
            let theta = params.y;
            let sin = Math.sin(theta);
            let cos = Math.cos(theta);
            return new Matrix({
                _00: cos,
                _01: 0,
                _02: sin,
                _10: 0,
                _11: 1,
                _12: 0,
                _20: -sin,
                _21: 0,
                _22: cos,
            });
        } else if (params.z !== undefined) {
            let theta = params.z;
            let sin = Math.sin(theta);
            let cos = Math.cos(theta);
            return new Matrix({
                _00: cos,
                _01: -sin,
                _02: 0,
                _10: sin,
                _11: cos,
                _12: 0,
                _20: 0,
                _21: 0,
                _22: 1,
            });
        } else {
            return null;
        }
    }
}
