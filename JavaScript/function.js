function hello(){
    console.log("hello");
}
hello();

function ludo(){
    let res =Math.floor(Math.random()*6)+1;
    console.log(res);
}
ludo();
ludo();
ludo();

function hello(name){
    console.log(`Hello ${name}`);
}
hello("Ayush");


function isAdult(age){
    if(age >=18){
        return "Adult";
    }else{
        return "not Adult";
    }
}
console.log(isAdult(20));

//Function Expression
const square = function(x){
    return x*x;
}

//Higher Order Function
//Function that takes another function as an argument
function multipleGreet(func, count){
    for(let i=0;i<count;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello");
}
multipleGreet(greet,5);

//Function that returns another function
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Invalid Request");
    }
}
let oddTest=oddEvenTest("odd");
oddTest(5);

//Calculator
const calculator={
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}
console.log(calculator.add(2,3));