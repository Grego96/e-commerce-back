const express = require("express");
const routes = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
  secret: process.env.JWT_SECRET_STRING,
  algorithms: ["HS256"],
});
const adminUserAccess = require("../middlewares/adminUserAccess");

routes.get("/orders/userOrders", verifyJwt, orderController.getUserOrders);

routes.get(
  "/orders/getStatusAttributes",
  verifyJwt,
  adminUserAccess,
  orderController.getStatusAttributes
);
routes.get(
  "/orders/getPaymentMethodAttributes",
  verifyJwt,
  adminUserAccess,
  orderController.getPaymentMethodAttributes
);
routes.get("/orders", verifyJwt, adminUserAccess, orderController.index);
routes.get("/orders/:id", verifyJwt, orderController.show);
routes.post("/orders", verifyJwt, orderController.store);

module.exports = routes;
