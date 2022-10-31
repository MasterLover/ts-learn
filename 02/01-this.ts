export { }

//加了export 这里就不是全局，扩展的window就是小需要写到global.d.tx
function Person(this: Window, name: string) {
    this.myname = name; //通过接口扩展属性
}
 
window.Person = Person;
window.Person("")