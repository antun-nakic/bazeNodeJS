import * as ManagedService from "../service/ManagedService.js";

export const createManaged = async (req, res) => {
    try 
    {
      let results = await ManagedService.createManaged([req.body.id_u, req.body.id_l]);
      res.status(200).json({
        results,
      });
    } 
    catch (error) 
    {
      console.error(
        "[ManagedController][createManaged][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "Neuspjelo dodavanje nove veze",
      });
    }
  };

export const deleteManaged = async (req, res) =>
{
    try 
    {
      let results = await ManagedService.deleteManaged([req.body.id_u, req.body.id_l]);
      res.status(200).json({
        results,
      });
    } 
    catch (error) 
    {
      console.error(
        "[ManagedController][deleteManaged][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "Neuspjelo brisanje veze",
      });
    }
}

export const getManagedByUser = async (req, res) =>
{
    try 
    {
      let results = await ManagedService.getManagedByUser([req.body.id_u]);
      res.status(200).json({
        results,
      });
    } 
    catch (error) 
    {
      console.error(
        "[ManagedController][getManagedByUser][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "Neuspjelo dohvaćanje lista po useru",
      });
    }
}

export const getManagedByTodo = async (req, res) =>
{
    try 
    {
      let results = await ManagedService.getManagedByTodo([req.body.id_l]);
      res.status(200).json({
        results,
      });
    } 
    catch (error) 
    {
      console.error(
        "[ManagedController][getManagedByTodo][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "Neuspjelo dohvaćanje usera po listi",
      });
    }
}