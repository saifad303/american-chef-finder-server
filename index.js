const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./api/chefs.json");
const testimonials = require("./api/testimonials.json");
const qna = require("./api/faq.json");

app.get("/", (req, res) => {
  res.send({ title: "Welcome API" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  if (id) {
    let chef = chefs.find((chef) => chef.id === id);
    res.send(chef || { warning: "The ID is not existing in the server." });
  }
});

app.get("/testimonials", (req, res) => {
  res.send(testimonials);
});

app.get("/qna", (req, res) => {
  res.send(qna);
});

app.listen(port, () => {
  console.log(`The chef finder server is running on PORT = ${port}`);
});
