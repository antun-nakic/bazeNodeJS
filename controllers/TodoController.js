import dbConnection from "./db_conn.js";

const sqlDohvatiSveUsere = "SELECT * FROM users";

dbConnection.query(sqlDohvatiSveUsere, function (err, result) {
  if (err) throw err;
  console.log("Result: " + JSON.stringify(result));
});

dbConnection.end();
