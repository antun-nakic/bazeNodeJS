METHOD : POST
URL: http://localhost:3000/api/managed/createManaged
PARAMS: {id_u, id_l}
results {results.insertId}

METHOD : POST
URL: http://localhost:3000/api/managed/deleteManaged
PARAMS: {id_u, id_l}
results {results}

METHOD : POST
URL: http://localhost:3000/api/managed/getManagedByTodo
PARAMS: {id_l}
results {results}

METHOD : POST
URL: http://localhost:3000/api/managed/getManagedByUser
PARAMS: {id_u}
results {results}