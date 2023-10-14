/*
    OBJECT DESTRUCTURING
    
    We can substract the value of any part of the objects.

    For example:
*/

let marvelCharacter = {
	name: {
		heroName: 'Doctor Strange',
		humanName:'Stephen Vincent Strange'
	},
	team: ['Avengers', 'Iluminati']
}

// Destructuring - Ex1
let { name, team } = marvelCharacter;

// Destructuring - Ex2
// We can changes the name.
let { name: nombre, team: equipo } = marvelCharacter;

// Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
console.log(nombre.heroName, nombre.humanName);
console.log(team[0], team[1]);

// Destructuring - Ex2
let { heroName, humanName } = marvelCharacter.name;

console.log(heroName);
console.log(humanName);