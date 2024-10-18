import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(5, 3));  
console.log('Subtract: ', subtract(5, 3));  
console.log('Multiply: ', multiply(4, 5));  


console.log('Uppercase: ', toUpperCase('hello'));  
console.log('Lowercase: ', toLowerCase('HELLO'));  
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  
console.log('Reversed: ', reverseArray([1, 2, 3]));  

addAndLogUpper(10, 20);  

const numbers = [1, 2, 3, 4, 5];
const maxNumber = findMax(numbers);
const multiplied = multiply(maxNumber, 2);
console.log('Max multiplied: ', multiplied);
console.log('Uppercase: ', toUpperCase(multiplied.toString()));
