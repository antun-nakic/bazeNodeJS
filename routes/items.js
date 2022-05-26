import express from "express";
import {
  createItem,
  deleteItem,
  modifyItem,
  getAllItems,
} from "../controllers/ItemController.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.write(
    "Welcome to ITEMS page where you can create new items, modify current items and more!"
  );
  res.end();
});

//treba primiti {name,pass}
router.post("/create", createItem);
router.post("/modify", modifyItem);
router.post("/delete", deleteItem);
router.get("/getAllItems/:id_l", getAllItems);

export default router;
