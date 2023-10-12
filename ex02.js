/* 
    We use a reserved work 'This', to call another 
    function in separeted part of the object.
*/

var callSesion7Examples = () => {

    var avengers = {
        value: 'this se encuentra dentro de avengers',
        avengerFunction: function () {
            console.log(this.sayHello());
        },
        sayHello: function() {
            console.log('Hello!');
        }
    }
    avengers.avengerFunction();
}
callSesion7Examples();