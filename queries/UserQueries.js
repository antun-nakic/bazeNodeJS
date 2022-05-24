export const UserQueries = {
  createUser: `INSERT INTO users (name, pass) VALUES (?,?)`,
  modifyUser: `UPDATE users SET name = ?, pass = ?, position = ? WHERE id = ?`,
};
