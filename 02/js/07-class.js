"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n) {
        this.myname = "默认名称";
        this.myname = n;
    }
    getName() {
        return this.myname;
    }
}
let p = new Person("hello");
console.log(p.getName);
class newPerson extends Person {
    constructor(age, name) {
        super(name);
        this.age = 25;
        this.age = age;
    }
}
let np = new newPerson(30, "np");
p.getName;
