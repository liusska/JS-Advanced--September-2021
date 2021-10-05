function filterByCriteria(input, criteria){
    const data = JSON.parse(input);
    criteria !== 'all' ? criteria = criteria.split('-') : '';
    let employeeResult = filterEmployees(data, criteria);
    let idx = 0
    for (let employee of employeeResult){
        console.log(`${idx}. ${employee["first_name"]} ${employee["last_name"]} - ${employee["email"]}`);
        idx ++;
    }

    function filterEmployees(employeeObj, criteria){
        const result = [];
        if (criteria === 'all'){
            return employeeObj;
        }
        for (let obj of employeeObj){
            for (let [key, value] of Object.entries(obj)){
                if (key === criteria[0] && value === criteria[1]){
                    result.push(obj)
                }
            }
        }
        return result;
    }
}



// filterByCriteria('[{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"}, ' +
//     '{"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"},' +
//     '{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"}]',
//     'gender-Female')

filterByCriteria(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
)