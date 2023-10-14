// Lo que tenemos 

var officers = [  
    { id: 20, name: 'Captain Piett' },  
    { id: 24, name: 'General Veers' },  
    { id: 56, name: 'Admiral Ozzel' },  
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  
  // Lo que necesitamos [20, 24, 56, 88]

  var officersIds = [];

  // forEach por ejemplo si queremos imprimir los names
  // y el map puedes crear un array nuevo desde uno ya existente
  // modificansdolo o cambiandolo a tu gusto.

  officers.forEach(officer => {
    officersIds.push(officer.id);
  });
  console.log(officersIds);

  // Same thing in below with map:

  const officersIds2 = officers.map(officer => officer.id);
  console.log(officersIds2);
 