const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { ChPoem } = require("../Models/ChPoemModel");
const { ChUser } = require("../Models/ChUserModel");

router.get("/:pg", async (req, res) => {
  const pgNo = req.params.pg;

  try {
    const allPoemsWithLikes = await ChPoem.aggregate([
      {
        $lookup: {
          from: "chlikes",
          localField: "_id",
          foreignField: "PoemId",
          as: "likes",
        },
      },
      {
        $addFields: {
          NumberOfLikes: { $size: "$likes" },
        },
      },
      {
        $unset: "likes",
      },
      {
        $sort: { CreatedDate: -1 },
      },
    ]);
    return res.status(200).json(allPoemsWithLikes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
