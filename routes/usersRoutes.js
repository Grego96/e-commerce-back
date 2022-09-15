const express = require("express");
const routes = express.Router();
const userContoller = require("../controllers/userController");
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
  secret: process.env.JWT_SECRET_STRING,
  algorithms: ["HS256"],
});
const adminUserAccess = require("../middlewares/adminUserAccess");

routes.post("/login", userContoller.login);
routes.post("/register", userContoller.register);

routes.get("/users",verifyJwt, adminUserAccess, userContoller.index);
routes.get("/users/:id" ,verifyJwt, adminUserAccess, userContoller.show);
routes.post("/users/registerAdm", verifyJwt, adminUserAccess, userContoller.storeAdminUser)
routes.delete("/users/:id" ,verifyJwt, adminUserAccess, userContoller.destroy);

module.exports = routes;