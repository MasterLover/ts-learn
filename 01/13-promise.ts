export { }

interface dataItf {
    a: number,
    b: number
}

interface ResItf {
    code: number,
    data: dataItf[],
    message: string
}

let p = new Promise<ResItf>((resolve, reject) => {
    resolve({
        code: 0,
        data: [
            { a: 1, b: 2 },
            { a: 2, b: 3 }
        ],
        message: ""
    })
})

p.then((res => {
    if (res.code == 0) {
        res.data.map(item => item.a)
    }
}))