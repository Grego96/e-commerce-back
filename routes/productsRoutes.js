const express = require("express");
const routes = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
    secret: process.env.JWT_SECRET_STRING,
    algorithms: ["HS256"],
  });
const adminUserAccess = require("../middlewares/adminUserAccess")

routes.get("/products", productController.index);
routes.get("/products/outstanding", productController.productOutstanding);
routes.get("/products/:slug", productController.show);

routes.post("/products" ,verifyJwt, adminUserAccess, productController.store)
routes.patch("/products/:id" ,verifyJwt, adminUserAccess, productController.edit)
routes.delete("/products/:id" ,verifyJwt, adminUserAccess, productController.destroy)

module.exports = routes;
