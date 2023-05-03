const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./api/chefs.json");

app.get("/", (req, res) => {
  res.send({ title: "Welcome API" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`The chef finder server is running on PORT = ${port}`);
});
