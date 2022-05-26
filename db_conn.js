import mysql from "mysql";
//mysql://bf792365c0e3cb:7cc6b0e4@eu-cdbr-west-02.cleardb.net/heroku_4b59f38d83a2edc?reconnect=true
var dbConnection = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  port: 3306,
  user: "bf792365c0e3cb",
  password: "7cc6b0e4",
  database: "heroku_4b59f38d83a2edc",
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
