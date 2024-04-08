const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ChPoem } = require("../Models/ChPoemModel");

router.get("/:poemId", async (req, res) => {
  const poemId = req.params.poemId;
  const poem = await ChPoem.findById(poemId).populate({
    path: "Poet",
    select: "UserId Username",
  });
  res.send(poem);
});

module.exports = router;
