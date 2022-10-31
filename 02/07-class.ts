export { }
class Person {
    myname: string = "默认名称"

    constructor(n: string) {
        this.myname = n
    }


    getName(): string {
        return this.myname;
    }
}

let p = new Person("hello")
console.log(p.getName);


class newPerson extends Person {
    age: number = 25
    constructor(age: number, name: string) {
        super(name)
        this.age = age;

    }
}

let np = new newPerson(30, "np")
p.getName