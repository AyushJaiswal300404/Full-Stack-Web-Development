// let btn= document.querySelector('#buttons');
// console.dir(btn);

// btn.onclick = function(){
//     alert('Button clicked');
// };

let btns = document.querySelectorAll('#buttons');
//console.dir(btns);

function sayHello(){
    alert('Hello');
}
function sayName(){
    alert('Name');
}

for(let btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     btn.style.backgroundColor = 'red';
    // };
    // btn.onmouseleave = function(){
    //     btn.style.backgroundColor = '';
    // };
    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayName);
    btn.addEventListener('mouseenter', function(){
        btn.style.backgroundColor = 'red';
    });

};

//element.addEventListener(event, callback function);


let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("para was clicked.");
});

//this keyword in event listener
function changeColor(){
    this.style.backgroundColor = 'red';
}
let h1 = document.querySelector('h1');
let btn2 = document.querySelector('#button2');
btn2.addEventListener('click', changeColor);
h1.addEventListener('click', changeColor);
