/*
    ASCYNCHRONY

    Between we are doing some things, asynchrony is
    working to get all data for example.
    Callbacks is old and changed for Promises
    But always is good to know how work if we find
    a old Js project.

    Check Axios.

    We use Fetch

*/

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });

fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });