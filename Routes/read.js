const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { ChPoem } = require("../Models/ChPoemModel");
const { ChUser } = require("../Models/ChUserModel");

router.get("/:pg", async (req, res) => {
  const pgNo = req.params.pg;
  const allPoems = await ChPoem.find({}).populate({
    path: "Poet",
    select: "UserId Username",
  });
  return res.status(200).json(allPoems);
});

router.get("/:pg/user", async (req, res) => {
  const allPoems = await ChUser.find({});
  return res.status(200).json(allPoems);
});

module.exports = router;
