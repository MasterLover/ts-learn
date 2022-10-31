export { }
interface MyItf {
    name: string
    age: number
    height: number
}
let obj: MyItf;
obj = {
    name: "hello",
    age: 12,
    height: 180
}


interface NameItf {
    name: string
}

interface PersonItf extends NameItf {
    height: number
    must?: false//属性可以缺省
}

interface PersonItf {
    readonly newName?: false //只读属性 没有setter
}

let person: PersonItf;
person = {
    name: "hello",
    height: 18
}
// 接口同名 属性合并