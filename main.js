// 1
const message = 'Welcome to Ukraine!';
let letter = [];
let Array_words = [];

for (letter of message){
    Array_words.push(letter);
}
console.log("index 'l' = " + Array_words.indexOf('l'));

// 2

let Arr1 =[1, 2, 3];
let Arr2 =[4, 5, 6];
console.log(Arr1.concat(Arr2));

// 3

// hello = 'hello world';
// letter2 = [];

// for (letter1 of hello){
//     letter2.push(letter1);
//     if(letter2.indexOf(0) || letter2.indexOf(6)){
//         letter2.indexOf(0).toUppercase();
//         letter2.indexOf(6).toUppercase();
//     }
// }
// console.log(letter2);

// 4

let numbers = [2,4,5,6];
numbers3_result = [];

for (numbers3 of numbers) {
    numbers3_result.push(Math.pow(numbers3, 3));
}
console.log(numbers3_result);

// // 5
// let str = "привет мир";

// if (str = "привет мир"){
//     console.log(str.length.toUpperCase());
//     console.log(str.length2.toUpperCase());
//     console.log(str.length4.toUpperCase());
//     console.log(str.length7.toUpperCase());
//     console.log(str.length9.toUpperCase());
// }
