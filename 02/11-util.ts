export { }

interface PItf {
    name: string,
    age: number
}



let obj: Partial<PItf> = {
    name: "",
    age: 12
}