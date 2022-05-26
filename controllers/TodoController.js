import * as TodoService from "../services/TodoService.js";

export const createTodo = async (req, res) => {
  try {
    let results = await TodoService.createTodo([req.body.name, req.body.description]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[TodoController][createTodo][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijelo dodavanje novog reda u tablicu todo",
    });
  }
};

export const modifyTodo = async (req, res) => {
  try {
    let results = await TodoService.modifyTodo([
      req.body.name,
      req.body.description,
      req.body.id
    ]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[TodoController][modifyTodo][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijela modifikacija korisnikove liste",
    });
  }
};

export const findTodo = async (req, res) => {
  try {
    let results = await TodoService.findTodo([
      req.body.name,
      req.body.description,
      req.body.id
    ]);
    console.log(results)
    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[TodoController][findTodo][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijela potraga korisnikove liste",
    });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    let results = await TodoService.getAllTodos([
      req.params.name,
    ]);
    console.log(results)
    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[TodoController][getAllTodos][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijela potraga korisnikove liste",
    });
  }
};


