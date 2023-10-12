/* SCOPE */

/* Varibale here work in all document, 
because is global, is not inside a function.
You can use everywhere. */

var avenger = 'Wolverine';

function global() {
    console.log('in function' + avenger);
}

global();
console.log('out function' + avenger);

/*Varibale here just work inside the function,
never outside */

function local() {
    var avenger = 'Wolverine';
    console.log(avenger);
}

local();
console.log(avenger);