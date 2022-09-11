const productsRoutes = require("./productsRoutes");
const usersRoutes = require("./usersRoutes");

module.exports = (app) => {
  app.use(productsRoutes);
  app.use(usersRoutes);
};
