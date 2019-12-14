'use strict';

/* 
    Data types:
        - number
        - string
        - boolean
        - null
        - undefined 
        - object
        - symbol
        - bigint
*/

// Numbers

let integer = 1;
let float = 1.25;
let infinity = -Infinity;

// Special types: Infinity, -Infinity, NaN

// console.log (1 / 0, Infinity, -Infinity); -> Inifinity sample

// console.log("Hi Rich!" / 3); -> NaN [not a number]

// let age = "Rich" * 5;
// let calculation = age * 4 + 2 - 1; -> operations with NaN return NaN!

// Math operations are SAFE! Worst case scenarion: NaN

// Strings

let name = "Alen"; // -> Double quotations 
let surname = 'Mehic'; // -> Single quotations
let fullname = `Fullname: ${name} ${surname}`; // -> Backtics ${expression}
let mathResult = `Result is: ${ 2 + 3 + 4 }`; 

// Booleans (logical type)

let isWeekend = true;
let underAge = false;

let isGreater = 16 > 8;

// Null

let users = null;

// Null is a reference to a non-existing object. 

// It is a special value that represents nothing, empty or value unknown

// Undefined

// Undefined = value not assigned

let x; // -> undefined

// Objects & symbols

// Objects are used to present collections.

// Symbols are used to create unique indentifiers for objects.

/* typeoff operator */

let val = null;
let number = 2;
let string = "string"
let boolean = true;

console.log(
    'Typeof operator: ',
    typeof null, // BUG! returns object
    typeof(number),
    typeof string, 
    typeof boolean, 
    typeof undefined, 
    typeof console, 
    typeof console.log // returns function even though functions are object types.
);

/* 
    Type Conversion 
*/

// String conversion

let isSunday = false; // -> 'false'

console.log(
    'String conversion: ', 
    String(isSunday), 
    String(null), 
    String(undefined), 
    String(1.25) );

// Number conversion

let currentDay = "14th";
let badFormat = "   30   ";
let shoeSize = 9;
let hasLicense = false;

console.log( 
    'Number conversion: ',
    Number(currentDay), 
    Number(badFormat), //-> "30" -> 30
    Number(shoeSize), 
    Number(hasLicense), 
    Number(null), 
    Number(undefined) );

// Boolean conversion

/* 
    Intuitively "empty" values are converted to false:
    - 0
    - ""
    - null
    - undefined
    - NaN

    All other types become true
*/

console.log(
    'Boolean conversion: ', 
    Boolean(0),
    Boolean(''),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
    Boolean(22),
    Boolean(Infinity),
    Boolean('Hey Alen!'),
    Boolean('true'),
    Boolean('0'),
    Boolean('1.24')
)