//for each 
let arr= [1,2,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);

//can also be written as
arr.forEach((el)=>{
    console.log(el);
});

//map
let num=[1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
console.log(double);


//filter
let num1=[2,3,4,5,6,7,8];
let ans = num1.filter((el)=>{
    return el%2==0;
});

//every = if all elements satisfy the condition then return true
let ans1 = num1.every((el)=>{
    return el%2==0;
});
console.log(ans1);
//some = if any one element satisfy the condition then return true
let ans2 = num1.some((el)=>{
    return el%2==0;
});
console.log(ans2);

//reduce = it will return a single value //acc = accumulator //el = element
//acc is the value that is **returned by the function** which is passed to the reduce function again and again till the end of the array
let ans3 = num1.reduce((acc,el)=>{
    return acc+el;
});
console.log(ans3);

let fmax= [1,4,7,55,6,8,9,10];
let max= fmax.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    return max;
});
console.log(max);

//default parameters
function add(a,b=1){ //parameter is given from right to left
    return a+b;
}
console.log(add(4));//5
console.log(add(4,5));//9

//spread operator = expands an iterable into multiple values

let arr1=[1,2,3,4];
//Math.min(arr[0], arr[1], arr[2], arr[3]);
Math.min(...arr1);

//array spread
let arr2=[1,2,3];
let newArr=[...arr1, ...arr2];
console.log(newArr);

//object spread
const data = {
    email:"ayushjaiswal300404@gmail.com",
    password:"1234"
};
const dataCopy = { ...data, id:123};
console.log(dataCopy);

//rest operator = collects all the remaining elements into an array
function sum(...args){
    return args.reduce((a,b)=>a+b);
}

//Destucturing = storing value of array into multiple variables
let names = ["Ayush", "Aman", "Ankit", "Anand"];
//let winner = names[0];
//let runnerup = names[1];
let [winner, runnerup, ...others] = names;
console.log(winner); //Ayush
console.log(runnerup); //Aman
console.log(others); //Ankit, Anand

//object destructuring
const student = {
    name:"Ayush",
    age:20,
    marks:100,
    subjects:{
        sub1:"Maths",
        sub2:"Science"
    },
    username:"ayushjaiswal",
    password:"1234"
};

let {username: user, password} = student; //can save the value of username with new identifier or can directly use key as variable name
console.log(user); //ayushjaiswal
console.log(password); //1234



