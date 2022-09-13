const productRoutes = require("./productsRoutes");
const userRoutes = require("./usersRoutes");
const categorieRoutes = require("./categoriesRoutes")
const orderRoutes = require("./ordersRoutes")

module.exports = (app) => {
  app.use(productRoutes);
  app.use(userRoutes);
  app.use(categorieRoutes);
  app.use(orderRoutes);
};
