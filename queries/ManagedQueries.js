export const ManagedQueries = 
{
    createManaged: `INSERT INTO manages (id_u, id_l) VALUES (?, ?);`,
    deleteManaged: `DELETE FROM manages WHERE manages.id_u = ? AND manages.id_l = ?;`,
    getManagedByUser: `SELECT * FROM manages INNER JOIN todos
    ON manages.id_l = todos.id WHERE id_u=?;`,
    getManagedByTodo: `SELECT * FROM manages INNER JOIN users
    ON manages.id_u = users.id WHERE id_l=?;`
}