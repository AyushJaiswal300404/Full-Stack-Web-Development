console.log('Hello World!');
// for comment prees CTRL+"/" 
let pencil=10;
let eraser=5;
//let output="The total cost is: "+(pencil+eraser)+" Rupees.";
let output=`The total cost is: ${pencil+eraser} Rupees.`; //tempelate literal using backticks
console.log(output);

//arithmatic operators (+,-,*,/,%,**)
console.log(10**3); //exponentiation operator
//Unary operators (++,--)
let a=10;
console.log(a++); //post increment
console.log(++a); //pre increment
//assignment operators (=,+=,-=,*=,/=,%=,**=)
let x=10;
x+=5;
console.log(x);
//comparison operators (==,===,!=,!==,<,>,<=,>=)
console.log('a'<'A');
console.log(a==12);
console.log(a===12);
//Conditional Statements (if,else,else if)
console.log('Conditional Statements');
let age=20;
if(age>=18){
    console.log('You are eligible to vote');
}else if(age>=60){
    console.log('You are a senior citizen');
}
else{
    console.log('You are not eligible to vote');
}
console.log('End of Conditional Statements');
//Example: Traffic Light
console.log("Traffic Light");
let color="red";
if(color==='red'){
    console.log('stop! Color is red');
}
else if(color==='yellow'){
    console.log('slow down ! Color is yellow');
}
else if(color==='green'){
    console.log('Go! Color is green');
}else{
    console.log('Invalid color');
}
console.log('End of Traffic Light');

//Nested if-else
let marks=45;
if(marks>=33){
    console.log('You are passed');
    if(marks>=80){
        console.log('You are passed with distinction');
    }
    else{
        console.log('You are passed with first class');
    }
}else{
    console.log("Better luck next time");
}

//Logical Operators (&&,||,!)
let out=(5>3)&&(3>4); //false
console.log(out);
console.log(!out); //true

//truly and falsy
if(0){
    console.log('falsy');
}
else{
    console.log('truly');
}

//switch case
console.log('Switch Case');
let color1="red";
switch(color1){
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('slow down');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('invalid color');
}

//Example: Weekdays
let day=1;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}
//alert and prompt
console.log("this is a message");
console.error("this is an error");
console.warn("this is a warning");
alert("this is an alert");

let name1=prompt("Enter your name");
console.log(name1);
