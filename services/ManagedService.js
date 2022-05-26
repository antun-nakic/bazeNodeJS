import { execute } from "../db_conn.js";
import { ManagedQueries } from "../queries/ManagedQueries.js";

export const createManaged = async (params) =>
{
    return execute(ManagedQueries.createManaged, params);
};

export const deleteManaged = async (params) =>
{
    return execute(ManagedQueries.deleteManaged, params);
};

export const getManagedByTodo = async (params) =>
{
    return execute(ManagedQueries.getManagedByTodo, params);
}

export const getManagedByUser = async (params) =>
{
    return execute(ManagedQueries.getManagedByUser, params);
}