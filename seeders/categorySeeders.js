const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Cargo & Utility",
    },
    {
      name: "City",
    },

    {
      name: "Off-Road",
    },

    {
      name: "Folding",
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories");
};
