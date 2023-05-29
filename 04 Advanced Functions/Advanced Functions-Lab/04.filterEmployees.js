function filterEmployees(input, criteria) {
    const [employe, value] = criteria.split('-')
    return JSON.parse(input).filter((x) => x[employe]==value || criteria =="all").forEach((y,i) => console.log(`${i}. ${y.first_name} ${y.last_name} - ${y.email}`))
  }
  
  // 0. Ardine Bassam - abassam0@cnn.com
  // 1. Kizzee Jost - kjost1@forbes.com
  // -----------------------
  // 0. Kaylee Johnson - k0@cnn.com
  // 1. Kizzee Johnson - kjost1@forbes.com
  // 2. Evanne Johnson - ev2@hostgator.com
  
  filterEmployees(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
  {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
  );
