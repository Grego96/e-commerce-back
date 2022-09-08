const productsRoutes = require("./productsRoutes")

module.exports = (app) => {
    app.use(productsRoutes)
};
