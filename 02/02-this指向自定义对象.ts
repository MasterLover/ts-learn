export { }
//定义类型
type objType = {
    myname: string,
    Person: (m: string) => void


}

// 定义对象未指定类型
let obj: objType = {
    myname: "zhangsan",
    Person: () => { },
}

// 将this指向对象类型
function Person(this: objType, name: string) {
    this.myname = name
}
obj.Person = Person
obj.Person("xxx")
