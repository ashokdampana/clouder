const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

module.exports = router;