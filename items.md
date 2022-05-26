-- Method: POST
URL: http://localhost:3000/api/items/create
PARAMS: {id_l, name, description, state}
RESULTS: {items.createItem}

-- Method: POST
URL: http://localhost:3000/api/items/modify
PARAMS: {id, name, description, state}
RESULTS: {items.modifyItem}

-- Method: POST
URL: http://localhost:3000/api/items/delete
PARAMS: {name}
RESULTS: {items.deleteItem}

-- Method: POST
URL: http://localhost:3000/api/items/getAllItems/:id_l
PARAMS: {id_l}
RESULTS: {items.getAllItems}
