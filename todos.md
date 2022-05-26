Method: POST
URL: http//localhost:3000/api/todos/create
PARAMS: {name, description}
RESULTS: {results.insertId}

Method: POST
URL: http//localhost:3000/api/todos/modify
PARAMS: {name, description, id}
RESULTS: {results.insertId}

Method: GET
URL: http//localhost:3000/api/todos/find/:name
PARAMS: {}
RESULTS: {results}

Method: GET
URL: http//localhost:3000/api/todos/all
PARAMS: {}
RESULTS: {results}