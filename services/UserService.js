import { execute } from "../db_conn.js";
import { UserQueries } from "../queries/UserQueries.js";

export const createUser = async (params) => {
  return execute(UserQueries.createUser, params);
};

export const modifyUser = async (params) => {
  return execute(UserQueries.modifyUser, params);
};

export const getUsers = async () => {
  return execute(UserQueries.getUsers);
};

export const findUserByName = async (params) => {
  return execute(UserQueries.findUserByName, params);
};
export const dummyLogin = async (params) => {
  return execute(UserQueries.dummyLogin, params);
};
