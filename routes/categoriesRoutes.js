const express = require("express");
const routes = express.Router();
const categoryController = require("../controllers/categoryController")

routes.get("/categories", categoryController.index)
routes.get("/categories/:id", categoryController.show)

module.exports = routes