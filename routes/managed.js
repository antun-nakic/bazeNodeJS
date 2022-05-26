import express from "express";
import {
  createManaged,
  getManagedByTodo,
  getManagedByUser,
  deleteManaged,
} from "../controllers/ManagedController.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.write("HENLO");
  res.end();
});

router.post("/createManaged", createManaged);
router.post("/getManagedByUser", getManagedByUser);
router.post("/getManagedByTodo", getManagedByTodo);
router.post("/deleteManaged", deleteManaged);

export default router;
