/*
    .BIND()
    .APPLY()
    .CALL()

    This functions isnt normal to use in frameworks or libraries 
    like react or angular, but maybe we can find in Javascript Vanilla Projects.

    Apply and Call, are the same just with some diferetens things, like:
    Apply need to put the parameters with []
    In the example we use Apply for use the function in var dragonBall, but 
    with the data of mySon. So the execution of function fullname are with 
    the data of mySon.
*/

var dragonBall = {
    name: 'Son',
    lastname: 'Goku',
    fullname: function() {
      return this.name + ' ' + this.lastname;
    }
  }
  
  var mySon = {
    name: 'Son',
    lastname: 'Gohan'
  }
  
  var myDragonBall = dragonBall.fullname.apply(mySon);
  
  console.log(myDragonBall); 