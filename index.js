'use strict';

/*
    Operators 
*/

/*
    Terms

    - operand -> value operator is applied to.
        5 + 2 -> 5 and 2 are operands
    - unary operator -> operator assigned to a single operand
        -5 -> - is an unary operator and 5 is an operand
    - binary operator -> operator assigned to 2 operands
        3 - 1 -> - is a binary operator and 3, 1 are operands

*/

// Binary + 

let name = 'Alen' + ' ' + 'Mehic'; // -> 'Alen Mehic'
let myString = 1 + '2'; // -> if + detects a string, it converts all operands to string
myString = 1 + 1 + '2'; // -> operations are evaluated from left to right -> 22

// All other operators, except binary +, convert strings to numbers
let age = '21' - 1; // converts string to a number
let days = 12 * '30'; 
let randomCalculation = 12 / '2' + 1; 

// console.log(randomCalculation); -> 7

// Unary +

let isUnderage = true;

// console.log( +isUnderage ); -> 1

let x = '30';
let y = '20';

//console.log( +x + +y );

// Remainder operator

console.log(5 % 2);
console.log(6 % 3);

// Exponentiation operator

console.log( 2 ** 2 );
console.log( 3 ** 2 );
console.log( 4 ** 3 );
console.log( 8 ** (1/3) ); 

// Operators execution order is determined by PRECEDENCE TABLE!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence