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

hello = 'hello world';
hello = hello.split(' ');
let h1 = hello[0];
let h2 = hello[1];
let res1 = h1[0].toUpperCase() + h1.slice(1);
let res2 = h2[0].toUpperCase() + h2.slice(1);
let result = `${res1} ${res2}`;
console.log(result);

// 4

let numbers = [2,4,5,6];
numbers3_result = [];

for (numbers3 of numbers) {
    numbers3_result.push(Math.pow(numbers3, 3));
}
console.log(numbers3_result);

// 5
let str = "привет мир";

str = str.split('');
str[0] = str[0].toUpperCase();
str[2] = str[2].toUpperCase();
str[4] = str[4].toUpperCase();
str[7] = str[7].toUpperCase();
str[9] = str[9].toUpperCase();
str = str.join('');
console.log(str);