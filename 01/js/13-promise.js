"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p = new Promise((resolve, reject) => {
    resolve({
        code: 0,
        data: [
            { a: 1, b: 2 },
            { a: 2, b: 3 }
        ],
        message: ""
    });
});
p.then((res => {
    if (res.code == 0) {
        res.data.map(item => item.a);
    }
}));
