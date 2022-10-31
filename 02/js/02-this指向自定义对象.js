"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义对象未指定类型
let obj = {
    myname: "zhangsan",
    Person: () => { },
};
// 将this指向对象类型
function Person(name) {
    this.myname = name;
}
obj.Person = Person;
obj.Person("xxx");
