'use strict';
// strict mode has to be declared on top ALWAYS. Only bit above can be a comment.

/* 
    Variables
*/

var name = "Rob"; // old-school declaration

let age = 20;
const birthYear = 1999;

// birthYear = 2000; -> ERROR! Changing constant variable

age = 21;

// let var1 = "Hello, how are you?", var2 = 200, var3 = [0, 1, 2]; -> Less-readable code!

let question = "Hello, how are you"; // -> string 
let wage = 2000; // -> integer

// What is good code? -> READABLE code.

question = "Hi, how are you?";

/*
    Variable naming
*/

/*
    Allowed names:
        - Letters
        - Digits
        - &, _

    - camelCase
    - JS is a case sensitive language (let name, let Name are different!)
    
    Not allowed:
        - starting with numbers (ex. let 123a)
        - kebab case (ex. first-name)
        - reserved names (import, for, let, const etc.)
*/

let weight = "75kg";
let Weight = "70kg";

let $ = 9; // Supershort variable name, -> jQuery
let _ = 1; // -> Lodash (utility library)

// let first-name = 'Alen'; -> ERROR!
// let 123name = "Alen"; -> ERROR!
// let if = "Alen"; -> ERROR!

// Naming should be clean and obvious! 

// isOk = true; -> strict mode prevents this behaviour (without strict mode enabled, this line would declare a variable and assign it the value of true)

console.log($, _);
