// const sum = (a, b) => a + b;   
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;
// const square = a => a * a;
// const cube = a => a * a * a;
// const squareroot = a => Math.sqrt(a);
// const cubeRoot = a => Math.cbrt(a);
// const power = (a, b) => Math.pow(a, b);
// const log = a => Math.log(a);
// const sin = a => Math.sin(a);
// const cos = a => Math.cos(a);
// const tan = a => Math.tan(a);
// const factorial = a => {
//     let fact = 1;
//     for (let i = 1; i <= a; i++) {
//         fact *= i;
//     }
//     return fact;
// };
// const g=9.8;
// const PI=3.14;  

// module.exports ={
//     sum:sum,
//     sub:sub,
//     mul:mul,
//     div:div,
//     mod:mod,
//     square:square,
//     cube:cube,
//     squareroot:squareroot,
//     cubeRoot:cubeRoot,
//     power:power,
//     log:log,
//     sin:sin,
//     cos:cos,
//     tan:tan,
//     factorial:factorial,
//     g:g,
//     PI:PI
// };

// module.exports.string = "Hello World";

export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => a / b;
export const mod = (a, b) => a % b;
export const square = a => a * a;
export const cube = a => a * a * a;
export const squareroot = a => Math.sqrt(a);
export const cubeRoot = a => Math.cbrt(a);
export const power = (a, b) => Math.pow(a, b);
export const log = a => Math.log(a);
export const sin = a => Math.sin(a);
export const cos = a => Math.cos(a);
export const tan = a => Math.tan(a);
export const factorial = a => {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact *= i;
    }
    return fact;
};
export const g = 9.8;
export const PI = 3.14;