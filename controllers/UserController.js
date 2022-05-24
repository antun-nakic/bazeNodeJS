import * as UserService from "../services/UserService.js";

export const createUser = async (req, res) => {
  try {
    let results = await UserService.createUser([req.body.name, req.body.pass]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[UserController][createUser][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijelo dodavanje novog korisnika u tablicu users",
    });
  }
};

export const modifyUser = async (req, res) => {
  try {
    let results = await UserService.modifyUser([
      req.body.name,
      req.body.pass,
      req.body.position,
      req.body.id,
    ]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[UserController][modifyUser][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijela modifikacija korisnikovih podataka",
    });
  }
};
