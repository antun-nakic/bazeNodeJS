import * as ItemService from "../services/ItemService.js";

export const createItem = async (req, res) => {
  try {
    let results = await ItemService.createItem([
      req.body.id_l,
      req.body.name,
      req.body.description,
      req.body.state,
    ]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[ItemController][createItem][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijelo dodavanje novog ITEMA u tablicu ITEMS",
    });
  }
};

export const modifyItem = async (req, res) => {
  try {
    let results = await ItemService.modifyItem([
      req.body.name,
      req.body.description,
      req.body.state,
    ]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[ItemController][modifyItem][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijela modifikacija itema",
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    let results = await ItemService.deleteItem([req.body.name]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[ItemController][deleteItem][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Nemožete izbrisati ovaj item!!!",
    });
  }
};

export const getAllItems = async (req, res) => {
  try {
    let results = await ItemService.getAllItems([req.params.id_l]);
    console.log(results);
    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[ItemController][getAllItems][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Došlo je do problema...",
    });
  }
};
