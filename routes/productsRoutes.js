const express = require("express");
const routes = express.Router();
const productController = require("../controllers/productController");

routes.get("/products", productController.index);
routes.get("/products/outstanding", productController.productOutstanding);
routes.get("/products/:id", productController.show);

module.exports = routes;
