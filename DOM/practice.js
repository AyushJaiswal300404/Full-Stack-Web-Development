let para1=document.createElement('p');
para1.innerText='I am a red';
document.querySelector('body').appendChild(para1);

para1.classList.add('red');

let h3=document.createElement('h3');
h3.innerText='Hey I am blue h3';
document.querySelector('body').append(h3);

h3.classList.toggle('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('p');

h1.innerText='I am in a div';
para2.innerText='ME TOO!';

div.append(h1);
div.append(para2);

div.classList.add('box');
document.querySelector('body').append(div);