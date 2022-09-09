const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/productsController");

<<<<<<< HEAD
routes.get("/products", productsController.index);
routes.get("/products/outstanding", productsController.productOutstanding);
routes.get("/products/:id", productsController.show);
=======
routes.get("/products", productsController.index)
routes.get("/products/outstanding", productsController.productOutstanding)
routes.get("/products/:id", productsController.show)
>>>>>>> 1ecf3d1fcad0d6672704b3bad953b0409b7ab58a

module.exports = routes;
