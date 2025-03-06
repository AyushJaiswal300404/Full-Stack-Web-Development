//async function
// async function greet(){
//     // throw "some random error";
//     // abc.abc();
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("promise resolved");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("promise rejected");
//     console.log(err);
// })

// let demo = async()=>{
//     return 5;
// }

//await keyword in async function
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log("num is ",num);
//         resolve(num);  // Add this to resolve the Promise
//         }
//         ,1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

let h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num==3){
                reject("Something went wrong");
            }
            h1.style.color=color;
            resolve("Color changed successfully.")
        },delay);
    });     
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("black", 1000);
    }catch(err){
        console.log("Error: ", err);
    }
    
    console.log("All colors were changed successfully.");
}

//APIs => Application Programming Interface
//JSON: JavaScript Object Notation
//Ajax => Asynchronous JavaScript and XML

//status code
//200: OK
//404: Not Found
//400: Bad Request
//500: Internal Server Error
//403: Forbidden
//401: Unauthorized

//Query Strings


//fetch API
let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log("resolved", response);
//     return response.json();
// })
// .then((data)=>{
//     console.log("data: ", data.fact);
// })
// .catch((error)=>{
//     console.log("rejected", error);
// })

async function getCatFact(){
    try{
        let res= await fetch(url);
        let data = await res.json();
        console.log("Data1: ", data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data2: ", data2.fact);
    }
    catch(err){
        console.log("Error: ", err);
    }   
    console.log("Bye");
}

getCatFact();