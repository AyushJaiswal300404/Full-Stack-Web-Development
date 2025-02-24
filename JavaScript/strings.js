let msg ="   Hello  ";
console.log(msg.trim()); // "Hello"

let password = "   hcjfdjjc  ";
console.log(password.trim()); // "hcjfdjjc"

//Strings in JavaScript are immutable.
let str = "Hello";
str[0] = "A";
console.log(str); // "Hello"
let upper = str.toLowerCase();
let smaller=str.toUpperCase();
console.log(smaller);
console.log(str.indexOf("u"));

let newmsg =msg.trim().toUpperCase();

let slice=str.slice(0, 3); // "Hel"
console.log(slice);

let replace = str.replace("He", "Ha"); // "Hallo"
console.log(replace);

let repeat=str.repeat(3); // "HelloHelloHello"
console.log(repeat);

//ASrrrays
let arr = ["apple", "banana", "orange"];
console.log(arr[0]); // "apple"

let nums= [1, "aman", 3, 4, 5];
console.log(nums.length); // 5
console.log(nums); // [1, "aman", 3, 4, 5]

//Arrays in JavaScript are mutable.
nums[0] = 10;
console.log(nums); // [10, "aman", 3, 4, 5]
nums[10]=100;
console.log(nums); // [10, "aman", 3, 4, 5, <5 empty items>, 100]

nums.push(200);
console.log(nums); // [10, "aman", 3, 4, 5, <5 empty items>, 100, 200]

nums.pop();
console.log(nums); // [10, "aman", 3, 4, 5, <5 empty items>, 100]

nums.shift(); // remove the first element
console.log(nums); // ["aman", 3, 4, 5, <5 empty items>, 100]

nums.unshift(1); // add the element to the beginning
console.log(nums); // [1, "aman", 3, 4, 5, <5 empty items>, 100]


console.log(nums.indexOf("aman"));

let arr1 = [1, 2, 3];
let newArr=nums.concat(arr1); // [1, "aman", 3, 4, 5, <5 empty items>, 100, 1, 2, 3]

nums.reverse();
console.log(nums); // [100, <5 empty items>, 5, 4, 3, "aman", 1]

let slice1 = nums.slice(1, 4); // ["aman", 3, 4]
console.log(slice1);

//splice method
//splice(start, deleteCount, item1, item2, ...)
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
console.log(arr2);
arr2.splice(1, 2); // [1, 3, 4, 5]
console.log(arr2);
arr2.splice(2); // [1, 3]
console.log(arr2);

//sort method
let arr3 = [3, 1, 2];
arr3.sort(); // [1, 2, 3]
console.log(arr3);

//array references
let arr4 = [1, 2, 3];
let arr5 = arr4;
arr5.push(4);
console.log(arr4); // [1, 2, 3, 4]
console.log(arr5); // [1, 2, 3, 4]   

//constant array
const arr6 = [1, 2, 3];
arr6.push(4);
console.log(arr6); // [1, 2, 3, 4]
//arr6 = [1, 2, 3, 4]; // TypeError: Assignment to constant variable.

//Nested arrays
let nested = [[1, 2], [3, 4]];
console.log(nested[0][0]); // 1

//


