// ================================= Log to console
console.time('Hello');
  console.log('Hello World!');
  console.log(123);
  console.log(true);
  let greeting = 'Hello';
  console.log(greeting);
  console.log([1,2,3,4]);
  console.log({a:1, b: '345'});
  console.table({a:1, b: '345'});
  console.error('This is some error');
  console.warn('This is warning');
console.timeEnd('Hello');
console.clear();

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
const name = 'John Doe';
console.log(typeof name); // String
// Number
const age = 22;
console.log(typeof age); // Number
// Boolean
const hasKids = true;
console.log(typeof hasKids); 
// Null
const car = null;
console.log(typeof car); // object
// Undefined
let test;
console.log(typeof test);
// Symbols
let sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies']; // Object
// Object literals
const address = {
  city: 'Saratov'
}; // Object
const today = new Date(); // Object
console.log(typeof today);
