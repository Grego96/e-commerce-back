const express = require("express");
const routes = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
  secret: process.env.JWT_SECRET_STRING,
  algorithms: ["HS256"],
});
const adminUserAccess = require("../middlewares/adminUserAccess");
const ownerOrAdminAccess = require("../middlewares/ownerOrAdminAccess")

routes.get("/orders" ,verifyJwt, adminUserAccess ,orderController.index)

module.exports = routes