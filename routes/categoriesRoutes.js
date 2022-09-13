const express = require("express");
const routes = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
  secret: process.env.JWT_SECRET_STRING,
  algorithms: ["HS256"],
});
const adminUserAccess = require("../middlewares/adminUserAccess");

routes.get("/categories", categoryController.index);
routes.get("/categories/:id", categoryController.show);

routes.post("/categories" ,verifyJwt, adminUserAccess, categoryController.store)
routes.patch("/categories/:id" ,verifyJwt, adminUserAccess, categoryController.edit)
routes.delete("/categories/:id" ,verifyJwt, adminUserAccess, categoryController.destroy)

module.exports = routes;
