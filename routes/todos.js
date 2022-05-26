import express from "express";
import { createTodo, modifyTodo, findTodo, getAllTodos } from "../controllers/TodoController.js";

const router = express.Router();

//treba primiti {name,pass}

router.post("/create", createTodo);
router.post("/modify", modifyTodo);
router.get("/find/:name", findTodo); //vraća cijeli red
router.get("/all", getAllTodos);


export default router;
