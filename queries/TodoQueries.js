export const TodoQueries = {
    createTodo: `INSERT INTO todos (name, description) VALUES (?,?)`,

    modifyTodo: `UPDATE todos SET name = ?, description = ? WHERE id = ?`,

    findTodo: `SELECT * FROM todos WHERE name = ?`,

    getAllTodos: `SELECT * FROM todos`
  };