const { posts } = require("./posts");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(`Server del mio blog`);
});

app.get("/bacheca", (req, res) => {
  res.type("json").send(posts());
});

app.listen(port, () => {
  console.log("Server in ascolto su port " + port);
});
