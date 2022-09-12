const productsRoutes = require("./productsRoutes");
const usersRoutes = require("./usersRoutes");
const categoriesRoutes = require("./categoriesRoutes")

module.exports = (app) => {
  app.use(productsRoutes);
  app.use(usersRoutes);
  app.use(categoriesRoutes)
};
