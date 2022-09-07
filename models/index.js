const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const User = require("./UserModel")(sequelize, Model, DataTypes);
const Order = require("./OrderModel")(sequelize, Model, DataTypes);
const Product = require("./ProductModel")(sequelize, Model, DataTypes);
const Category = require("./CategoryModel")(sequelize, Model, DataTypes);
const ProductCategory = require("./ProductCategoryModel")(
  sequelize,
  Model,
  DataTypes
);

User.hasMany(Order);

module.exports = { sequelize, User, Order, Product, Category, ProductCategory };
