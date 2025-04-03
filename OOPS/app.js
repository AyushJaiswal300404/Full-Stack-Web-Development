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

function PersonMaker(name,age){
    return {
        name: name,
        age: age,
        greet: function() {
            console.log("Hello, my name is " + this.name);
        }
    };
}