import { execute } from "../db_conn.js";
import { TodoQueries } from "../queries/TodoQueries.js";

export const createTodo = async (params) => {
    return execute(TodoQueries.createTodo, params);
  };

  export const modifyTodo = async (params) => {
    return execute(TodoQueries.modifyTodo, params);
  };

  export const findTodo = async (params) => {
    return execute(TodoQueries.findTodo, params);
  };

  export const getAllTodos = async (params) => {
    return execute(TodoQueries.getAllTodos, params);
  };