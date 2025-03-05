//callstack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }

// three();

// breakpoints(debugging) => pause the execution of the code at a certain point 
// done through the browser's developer tools in sources tab
// you can add breakpoints by clicking on the line number

//JS is single-threaded, synchronous language => one command at a time
//To deal with this, we use callbacks
//We use browser which waits and when time add function to callstack

//let h1 = document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

//Callback Hell
//Eg-1
// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }


// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// });

//Eg-2
// function  savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("Ayush Jaiswal",
//     ()=>{
//         console.log("your data was saved");
//         savetoDb(
//             "hello world",
//             ()=>{
//                 console.log("success2: data2 saved");
//             },
//             ()=>{
//                 console.log("failure2: weak connection");
//             }
//         )

//     },
//     ()=>{
//         console.log("failure1: Weak connection");
//     }
// );


//Promises => resolve or reject
function  savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}
//then and catch
savetoDb("Ayush Jaiswal")
 .then((result)=>{
    console.log("Data1 saved. Promise was resolved");
    console.log("Result of promise: ", result);
    return savetoDb("hello world")
    // .then(()=>{
    //     console.log("data2 saved");
    // });
  })
  .then((result)=>{
    console.log("Data2 saved.Promise 2 resolved");
    console.log("Result of promise: ", result);
    return savetoDb("Harry");
  })
  .then((result)=>{
    console.log("Data3 saved. Promise 3 was resolved.");
    console.log("Result of promise: ", result);
  })
  .catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of promise: ", error);
  });

let h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color changed successfully.")
        },delay);
    });     
}
//three state- fulfilled,pending and rejected

changeColor("red",1000)
    .then(()=>{
        console.log("Red color was completed");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("Orange color was completed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("Green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("Blue color was completed");
    })


