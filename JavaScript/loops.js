//For Loop
for(let i=1;i<=5;i++){
    console.log(i);
}
//Odd Number
for(let i=1;i<=15;i+=2){
    console.log(i);
}
//Even Number
for(let i=2;i<=10;i+=2){
    console.log(i);
}
//Infinte Loop
//for(;;){
//    console.log("Hello");
//}

//Multiplication Table
let n =prompt("Enter the number");
n=parseInt(n); //convert sting into number
for(let i=n;i<=n*10;i+=n){
    console.log(i);
}

//Nested For Loop
for(let i=1;i<=3;i++){
    console.log(`Outer Loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

//While Loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//Favorite Movie
let guess = prompt("What is your favorite movie?");
const favMovie = "Interstellar";
while(guess!=favMovie){
    if(guess=="quit"){
        break;
    }
    console.log("Wrong");
    guess = prompt("What is your favorite movie?");
}
if(guess==favMovie){
    console.log("Correct");
}

//break 
for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}

//loops with arrays
let fruits = ["Apple","Banana","Mango","Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//loops with nested arrays
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(i,j,matrix[i][j]);
    }
}

//For of loop
let colors = ["Red","Green","Blue"];
for(let color of colors){
    console.log(color);
}

//Nested For of loop
let names = [
    ["John","Doe"],
    ["Jane","Doe"],
    ["Tom","Jerry"]
];
for(let name of names){
    for(let n of name){
        console.log(n);
    }
}

//To Do List
let todo=[];
let input = prompt("What would you like to do?");
while(true){
    if(input=="quit"){
        break;
    }else if(input=="add"){
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("Task added");
    }else if(input=="list"){
        console.log("**********");
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }else if(input=="delete"){
        let index = parseInt(prompt("Enter the index to delete"));
        todo.splice(index,1);
    }
    input = prompt("What would you like to do?");
}