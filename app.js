const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(`ricevuta richiesta GET sulla rotta "/"`);
});

app.listen(port, () => {
  console.log("il server è in ascolto sulla porta " + port);
});
