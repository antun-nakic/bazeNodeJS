import { execute } from "../db_conn.js";
import { UserQueries } from "../queries/UserQueries.js";

export const createUser = async (params) => {
  return execute(UserQueries.createUser, params);
};

export const modifyUser = async (params) => {
  return execute(UserQueries.modifyUser, params);
};
