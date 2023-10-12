/*
    Hoisting

    JS declare the variables, and then do console.log for example.
    for that is a good practice, use the variables outside on the top
    of our code. Be careful where the vars are working·

    For that, if we declareted all var with diferentes names,
    we never had problems with Hoisting. ;) 

    So never use the same name for two varibles.
    correctsNames === goodCoding.

*/

// FIRST EX

// OUR FUNCTION
function foo() {
    console.log(x); // undefined
    var x = 10;
}
//JS READ: 
function foo() {
    var x;
    console.log(x); // undefined
    x = 10;
}

// SECOND EX

// Be careful, because Hoisting is sometimes ocult.

var x = 'global value';
function foo() {
    console.log(x);
    // undefined 
    var x = 'local value';
    console.log(x);
    // local value
}
foo();