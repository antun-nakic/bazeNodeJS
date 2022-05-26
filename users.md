Kad god je post metoda, tip upita mora biti content-type:application/json, a u body zahtjeva stavite PARAMS

Method : POST
URL: http://localhost:3000/api/users/create
PARAMS: {name,pass}
RESULTS: {results.insertId}

Method : POST
URL: http://localhost:3000/api/users/modify
PARAMS: {id,name,pass, position}
RESULTS: {results}

Method : POST
URL: http://localhost:3000/api/users/login
PARAMS: {name,pass}
RESULTS: {results.succeed}

Method : GET
URL: http://localhost:3000/api/users/all
PARAMS: {}
RESULTS: {results.name}

Method : GET
URL: http://localhost:3000/api/users/find/:name
PARAMS: {}
RESULTS: {results.name}
