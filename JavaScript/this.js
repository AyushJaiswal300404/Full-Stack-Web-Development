//this keyword
const student={
    name: "Ayush",
    age:21,
    eng:95,
    maths:92,
    phy:97,
    getAvg(){
        let avg = (this.eng+ this.maths +this.phy)/3;
        console.log(avg);
    }
}

//try and catch
//let a=9;
try{
    console.log(a);
}catch{
    console.log("variable a doesn't exist");
}

//Arrow function
const sum=(a,b)=>{
    console.log(a+b);
}
//shortcut for only one return
const mul=(a,b)=>(a*b);

//setTimeOut(function, timeout)
console.log("hi there!");

setTimeout( ()=>{
    console.log("WellNest");
}, 4000);
console.log("Welcome to ");

//setInterval(function, interval)
let id=setInterval( ()=>{
    console.log("WellNest");
}, 4000);
console.log("Welcome to ");
//clearInterval(id);

//this with arrow
//function ke liye scope hota h kon unhe call kr raha h
//arrow function uses lexical scope mtlb parent ka scope inherit kr lete h
const student1={
    name: "Ayush",
    marks:95,
    prop: this,//global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);//parent scope=window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(function(){
            console.log(this); //window
        }, 1000);
    },
    getInfo2: function(){
        setTimeout(()=>{
            console.log(this); //student1
        }, 1000);
    }
}