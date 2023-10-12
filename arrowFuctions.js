/*
    New mode Functions =>

    Simply and easy form to declare arrow
    fuctions. All fuctions in => we can traduce
    to old model.

    if we declare all funcntion in the same line
    we can skip the return.
*/

// Example: both functions works but the first one are on arrow Function.

const getSurname = () => 'Elena';

const getSurname2 = function() {
    return 'Elena';
};


//Another example. 

const suma = function(sum1, sum2) {
    return sum1 + sum2;
};

const suma2 = (sum1, sum2) => sum1 + sum2;