import { createUser } from "../services/UserService.js";

export const createNewUser = async (req, res) => {
  try {
    let results = await createUser([req.body.name, req.body.pass]);

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error(
      "[UserController][createNewUser][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "Neuspijelo dodavanje novog korisnika u tablicu users",
    });
  }
};
