/*
    VARIABLE LET

    Let are more restrictive, replaces Var.
    We can use both variables, but is better to work 
    with let, because use the new features of JS Ecma6
    In the example below, we see how let works, more
    restrictive and cant change after give a value,
    always the let are defined for some function, bucle 
    or wahtever...

*/

var variableVar = "Soy un VAR";
let variableLet = "Soy un LET";
if (true) {
    var variableVar = "Nuevo valor de VAR";
    let variableLet = "Nuevo valor de LET";
}
console.log(variableVar);
// Nuevo valor de VAR 
console.log(variableLet);
// Soy un LET

/*
    VARIABLE CONST

    Same like Let, but, you never can change the
    value of the Const. So always be the same, if
    not return a rerror. Asisgnment to constant variable.

*/

function explainConst() {
    const x = 10;
    console.log(x); // output 10
}