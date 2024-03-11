/*
/ Scope will covered more thoroughly shortly, but in order to talk about code blocks... 
/ Scope defines where variables and functionality can be accessed 
*/

/*
/ Code Blocks
*/
// These describe chunks of code that are within the same scope
// Usually delimited by a pair of curly braces {}
// Usually combined with other JS functionality like conditionals or functions or loops

// because the variables below are created at the top level of the script, they are valid at all levels of the script
let x = 10;
let y = 5;
// console.log("x is:", x, "y is:", y);
// let z = x + y;

{
    // if i declare z in here, it is only valid in here, and out of the {}
    // it does not exist
    let z = x + y;
    // console.log("x is:", x, "y is:", y);
    // console.log("z is:", z);
}

// console.log("x is:", x, "y is:", y);
// you get the error that z is not defined because it was only valid in {}
// console.log("z is:", z);

/*
/   =============== Scope ===============
/   Global Scope - valid everywhere - (so if you use var instead of let) - 
/       but we want to avoid this because it creates the potential for unintentionally overwriting things
/   Module Scope - we'll learn more about this later
/   Function Scope - we'll talk about this when we learn about functions (soon)
/   Block Scope - valid only within the BLOCK OF CODE that it was created in {}
*/

// This code from the notes was modified from mdn coee that can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had change the variable name from x to ex becaue I have already declared a variable called x
// look at at error that you get if you keep that x variable name

// {
//     var ex = 1;
//     {
//         var ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

// console.log('-----------------------------------');

// {
//     let ex = 1;
//     {
//         let ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

console.log('-----------------------------------');
// console.log(ex)

/*
/ Control Flow and Conditionals
/ 
*/
// if () {}
// if () {} else {}
// what is the difference?
// remember = is assignment and == or === are both checking for equality
// you do NOT need the {} if there is only one line, BUT you DO need them any time there is more than one line
// it can also help with readability as you are learning to use {}
x = 10;
console.log('if but not else');
if (x==10) {
    console.log('x is 10');
    // this only prints if x is 10
}
console.log('i always print');

console.log('************************');

console.log('if with else');
if (x==10) {
    console.log('x is 10');
    // this only prints if x is 10
} else {
    console.log('i only print if x is NOT 10');
}
console.log('i always print')

console.log('************************');

let isRaining = true;
if (isRaining) {
    console.log('i am bringing my umbrella')
}

let age = 16;
if (age >= 15) {
    console.log('you are old enough to have a drivers license' )
} else {
    console.log('you are NOT old enough to have a drivers license')
}

let newVar;
if (newVar) {
    console.log('do things with newVar');
} else{

console.log('this is not defined and initialized');
}

