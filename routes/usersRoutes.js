const express = require("express");
const routes = express.Router();
const userContoller = require("../controllers/userController");

routes.post("/login", userContoller.login);
routes.get("/users", userContoller.index);
routes.get("/users/:id", userContoller.show);

module.exports = routes;
