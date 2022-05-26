import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.write("Branimira i Daria u akciji!");
  res.end();
});

export default router;
