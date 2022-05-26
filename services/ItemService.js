import { execute } from "../db_conn.js";
import { ItemQueries } from "../queries/ItemQueries.js";

export const createItem = async (params) => {
  return execute(ItemQueries.createItem, params);
};

export const modifyItem = async (params) => {
  return execute(ItemQueries.modifyItem, params);
};

export const deleteItem = async (params) => {
  return execute(ItemQueries.deleteItem, params);
};

export const getAllItems = async (params) => {
  return execute(ItemQueries.getAllItems, params);
};
