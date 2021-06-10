import express from "express";
import rutas from "./rutas";
const cors = require('cors')
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(rutas);

app.use(express.static(path.join(__dirname, '../public')));
/*app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});*/

app.listen(3000, () => {
  console.log(`Servidor en puerto`, 3000);
});