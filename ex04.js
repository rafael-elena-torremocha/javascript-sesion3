/*
    Clousures and This, is like a recursive function, but not the same.
    Is have a function closeure inside another function wiht
    variables and data.
*/

function changePokemon(pokemon) {
    return function() {
      console.log('Mi pokemon preferido es: ' + pokemon)
    }
  }
  var pokemonAgua = changePokemon('Blastoise');
  var pokemonPlanta = changePokemon('Bulbasur');
  var pokemonElectrico = changePokemon('Pikachu');
  
  // Comprobación del clousure
  console.log(pokemonElectrico());
  console.log(pokemonPlanta());
  console.log(pokemonAgua());