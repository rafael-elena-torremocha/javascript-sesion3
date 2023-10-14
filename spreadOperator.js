//Example:

let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

// Antes se usaba el concat y ahora ...
let myMutants = [...xmen, ...newXmen];

// Se puede usar también para copiar un array
let xmenCopy = [...xmen];

// se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();

// No se ha modificado
console.log(xmen);
console.log(lastMutant)

//Example 2:

// Spreed Operator in Parameters
function mult(a, b, c) {
    return a * b * c;
}


const numbers = [1, 2, 3];

mult(...numbers);


