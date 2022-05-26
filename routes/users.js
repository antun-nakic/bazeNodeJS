import express from "express";
import {
  createUser,
  modifyUser,
  getUsers,
  findUserByName,
  dummyLogin,
} from "../controllers/UserController.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.write("hello world jdfhjsdbf");
  res.end();
});

//treba primiti {name,pass}
router.post("/create", createUser);
router.post("/modify", modifyUser);
router.get("/all", getUsers);
router.get("/find/:name", findUserByName);
router.post("/login", dummyLogin);

export default router;
