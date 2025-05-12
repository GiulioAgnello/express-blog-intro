const express = require("express");
const app = express();
const port = 3000;

express.static("public");

app.get("/", (req, res) => {
  console.log(`Server del mio blog`);
});

app.get("/bacheca", (req, res) => {
  res.type("json").send([
    {
      titolo: "Ciambellone",
      contenuto: "ciambellone cioccolato",
      immagine: "/ciambellone.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "craker",
      contenuto: "cracker barbabietola",
      immagine: "/craker_barbabietola.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "pane fritto",
      contenuto: "pane fritto dolce",
      immagine: "/pane_fritto_dolce.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "pasta",
      contenuto: "pasta con barbabietola",
      immagine: "/pasta_barbabietola.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      titolo: "torta",
      contenuto: "torta paesana",
      immagine: "/torta_paesana.jpeg",
      tags: ["tag1", "tag2", "tag3"],
    },
  ]);
});

app.listen(port, () => {
  console.log("Server in ascolto su port " + port);
});
