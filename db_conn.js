import mysql from "mysql";

var dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "todo",
});

dbConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export const execute = (query, params = null) => {
  try {
    return new Promise((resolve, reject) => {
      dbConnection.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]: ", error);
    throw new Error("failed to execute MySQL query");
  }
};
