// const person ={
//     name:'John', //properties of person object
//     age: 28
// }
// module.exports=person; //to export const person variable  

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){ //method
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports=Person;  //to export Person class