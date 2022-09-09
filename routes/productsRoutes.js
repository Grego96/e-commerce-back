const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/productsController");

routes.get("/products", productsController.index);
routes.get("/products/outstanding", productsController.productOutstanding);
routes.get("/products/:id", productsController.show);

module.exports = routes;
