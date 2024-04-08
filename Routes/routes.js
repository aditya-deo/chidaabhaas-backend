const express = require("express");
const router = express.Router();
// const itemRoutes = require("./api/items");

// router.use("/items", itemRoutes);

router.get("/", function (req, res) {
  res.send("api");
});

module.exports = router;
