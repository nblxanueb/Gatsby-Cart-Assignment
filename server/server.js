const express = require("express");
const server = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

let products = require("./inventory.json");



server.use(express.json());
server.use(cors());


server.get("/", (req, res) => {
  res.json(products);
});


server.listen(PORT, () => {
  console.log(`***Server running on ${PORT}***`);
});
