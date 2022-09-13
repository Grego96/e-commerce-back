const express = require("express");
const routes = express.Router();
const productController = require("../controllers/productController");

routes.get("/products", productController.index);
routes.get("/products/outstanding", productController.productOutstanding);
routes.get("/products/:slug", productController.show);
routes.post("/products", productController.store)
routes.patch("/products/:id", productController.edit)
routes.delete("/products/:id", productController.destroy)

module.exports = routes;
