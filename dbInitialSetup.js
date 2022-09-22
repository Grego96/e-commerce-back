const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  await require("./seeders/orderSeeders")();
  await require("./seeders/userSeeders")();
  await require("./seeders/productSeeders")();
  await require("./seeders/categorySeeders")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
