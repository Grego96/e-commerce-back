const express = require("express")
const routes = express.Router();
const usersContoller = require("../controllers/usersController")

routes.post("/login", usersContoller.login)

module.exports = routes