const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ title: "Welcome API" });
});

app.listen(port, () => {
  console.log(`The chef finder server is running on PORT = ${port}`);
});
