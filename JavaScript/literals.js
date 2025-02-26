//Object Literals are used to store key value pairs
//Objects are collection of properties

const student={
    name:"Ayush",
    age:20,
    isMale:true,
    subjects:["Maths","Science","English"]
};

const thread={
    username: "@ayushblues",
    content: "Hello World",
    likes:1500,
    comments:["Hello","Hi","Hey"]
};

console.log(thread["likes"]);
console.log(thread.likes);
thread.likes=1900;
console.log(thread.likes);
delete thread.likes;
console.log(thread.likes);

//Object of Objects
const classInfo = {
    aman: { grade: "A",
            marks: 90
    },
    ayush: { grade: "B",
            marks: 80   
    }
};
console.log(classInfo.aman.grade);

//Array of Objects
const classInfo2 = [
    {     name: "Aman",
          grade: "A",
          marks: 90
    },
    {name: "Ayush",
         grade: "B",
          marks: 80
    }
]
console.log(classInfo2[0].grade);

//Math Object
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.abs(-4.7));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.min(0,150,30,20,-8,-200));

//Random Number
console.log(Math.random());
let step1= Math.random();
let step2= step1*10;
let step3= Math.floor(step2);
let step4= step3+1;//range changes from 0 to 9 to 1 to 10
console.log(step4);
//Math.floor(Math.random()*10)+1;

//Guessing Game
let max=prompt("Enter the maximum number");

const random=Math.floor(Math.random()*max)+1;

let guess=parseInt(prompt("Enter your guess"));
while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
    if(guess==random){
        console.log("You guessed it right");
        break;
    }
    else if(guess>random){
        guess=parseInt(prompt("Too high, Enter again"));
    }
    else{
        guess=parseInt(prompt("Too low, Enter again"));
    }
}