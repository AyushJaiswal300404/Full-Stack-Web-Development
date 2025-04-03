// const s1 ={
//     name: "John",
//     age: 30,
//     marks: 90,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// const s2 ={
//     name: "Jane",
//     age: 25,
//     marks: 95,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// //Factory FDunction

// function PersonMaker(name,age){
//     // let person = {name: name,
//         age: age,
//         greet: function() {
//             console.log("Hello, my name is " + this.name);
//        };
//     };
//     return person;
// }

// let p1 = PersonMaker("John", 30); //copy
// let p2 = PersonMaker("Jane", 25); //copy


//Constructors
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log("Hello, my name is " + this.name);
// }




// //Clases
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log("Hello, my name is " + this.name);
    }
}
let p1 = new Person("John", 30); 
let p2 = new Person("Jane", 25); 


//Inheritance
class Student extends Person{
    constructor(name, age, marks){
        super(name, age); //Parent call constructor is being called
        this.marks=marks;
    }
    talk(){
        console.log("Hello, my name is " + this.name + " and my marks are " + this.marks);
    }
}