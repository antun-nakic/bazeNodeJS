export const UserQueries = {
  createUser: `INSERT INTO users (name, pass) VALUES (?,?)`,
  modifyUser: `UPDATE users SET name = ?, pass = ?, position = ? WHERE id = ?`,
  getUsers: `SELECT * FROM users`,
  findUserByName: `SELECT id,name FROM users WHERE name = ?`,
  dummyLogin: `SELECT COUNT(name) as succeed, id as userId, name as userName, FROM users WHERE name=? AND pass=?`,
};
