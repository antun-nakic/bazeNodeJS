import dbConnection from "../db_conn.js";

export const createNewUser = (req, res) => {
  if (req.body) {
    dbConnection.query(
      "INSERT INTO `users` (`name`, `pass`) VALUES (?,?)",
      [req.body.name, req.body.pass],
      function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      }
    );
    res.write(req.body.name);
    res.end();
  } else {
    res.write("Sve pet, samo je reno 6.");
    res.end();
  }
};
