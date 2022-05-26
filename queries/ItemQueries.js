export const ItemQueries = {
  createItem: `INSERT INTO items (id_l, name, description, state) VALUES (?, ?, ?, ?)`,
  modifyItem: `UPDATE items SET name = ?, description = ?, state = ? WHERE id = ?`,
  deleteItem: `DELETE FROM items WHERE name = ?`,
  getAllItems: `SELECT * from items where id_l = ?`,
};
