const express = require("express");
const routes = express.Router();
const userContoller = require("../controllers/userController");

routes.post("/login", userContoller.login);

module.exports = routes;
