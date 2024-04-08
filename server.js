const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//routes
const routes = require("./Routes/routes");
const readRoutes = require("./Routes/read");
const poemRoutes = require("./Routes/poem");

app.use(bodyParser.json());

//cors policy
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Load routes
app.use("/api", routes);
app.use("/read", readRoutes);
app.use("/poem", poemRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});
const port = process.env.PORT || 8080; // You can use environment variables for port configuration

mongoose.connect(`${process.env.MONGOCONNECTIONSTRING}`).then(() => {
  console.log("Connected to DB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
