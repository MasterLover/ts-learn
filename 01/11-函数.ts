export { }

function fn(a: number, b: number): number {
    return a + b;

}

// 接口函数

interface fnItf {
    (p: string): number  //p 删除  number 返回值
}

let func: fnItf = (p: string) => {
    return 1
}
func("hello")


// 类型别名

type FnType = (p: string) => void
let fn2: FnType = (p: string): void => { }
fn2("hello")