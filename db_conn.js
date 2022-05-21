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

export default dbConnection;
