// ================================= Log to console
// console.time('Hello');
//   console.log('Hello World!');
//   console.log(123);
//   console.log(true);
//   let greeting = 'Hello';
//   console.log(greeting);
//   console.log([1,2,3,4]);
//   console.log({a:1, b: '345'});
//   console.table({a:1, b: '345'});
//   console.error('This is some error');
//   console.warn('This is warning');
// console.timeEnd('Hello');
// console.clear();

// ============================= VARIABLES
// LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting); // Success

// CONST
// const name = 'John';
// console.log(name);
// name = '';
// Have to assing a value (error)

// const person = {
//   name: 'John',
//   age: 30
// };
// //person = 'Sara'; // Error
// person.age = 22; // Success
// console.table(person);

// const numbers = [1, 2, 3];
// numbers.push(6); // Success
// numbers = [6]; // Error

// console.log(numbers);

// ======================== DATA TYPES
// PRIMITIVE TYPES (six)
// String 
// const name = 'John Doe';
// console.log(typeof name); // String
// // Number
// const age = 22;
// console.log(typeof age); // Number
// // Boolean
// const hasKids = true;
// console.log(typeof hasKids); 
// // Null
// const car = null;
// console.log(typeof car); // object
// // Undefined
// let test;
// console.log(typeof test);
// // Symbols
// let sym = Symbol();
// console.log(typeof sym);

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies']; // Object
// // Object literals
// const address = {
//   city: 'Saratov'
// }; // Object
// const today = new Date(); // Object
// console.log(typeof today);

//=========================== TYPE CONVERSION
// let val;

// // Number to string
// val = 5; // 5, number, undefined
// val = String(5); // 5, string, 1
// val = String(4+4) //  8, string, 1

// // Boolean to String
// val = String(true); // true, string, 4

// // Date to String
// val = String(new Date()); // Fri Jul 13 2018 21:54:10 GMT+0300 (Москва, стандартное время), string, 61

// // Array to String
// val = String([1, 2, 3, 5]); // 1,2,3,5, string, 7

// // toString() - alternative to String()
// val = (5).toString(); // 5, string, 1

// // String to number
// val = '5'; // 5, string, 1
// val = Number(5); // 5, number, undefined, 5.00
// val = Number(true); // 1, number, undefined, 1.00
// val = Number(false); // 0, number, undefined, 0.00
// val = Number(null); // 0, number, undefined, 0.00
// val = Number('hello'); // NaN, number, undefined, NaN
// val = Number([1, 2, 4]); // NaN, number, undefined, NaN
// val = Number({a:1}); // NaN, number, undefined, NaN

// val = parseInt('100'); // 100, number, undefined, 100.00
// val = parseInt('100.22'); // 100, number, undefined, 100.00
// val = parseFloat('100.22'); // 100.22, number, undefined, 100.22

// const val1 = String(5);
// const val2 = 6;
// val = val1 + val2; // 56, string, 2, error
// val = Number(val1 + val2); // 56, number, undefined, 56.00

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2)); // Point after ,
  
// ================== NUMBERS THE MATH OBJECT
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // 3.14.....
val = Math.E; // 2.718.....
val = Math.round(2.8); // 3
val = Math.round(2.3); // 2
val = Math.ceil(2.3); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-4); // 4
val = Math.pow(8, 2); // 64
val = Math.min(8, 2, 10, 2.12, 1.2); // 1.2
val = Math.max(8.3, 2, 10.1, 2.12, 1.2); // 10.1
val = Math.random() * 20; // <= 20 
val = Math.floor(Math.random() * 20 + 10); // >= 10 && <= 20 


console.log(val);