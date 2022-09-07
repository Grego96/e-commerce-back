const { ProductCategory } = require("../models");

module.exports = async () => {
  const productCategories = [
    {
      id_product: 1,
      id_category: 1,
    },
    {
      id_product: 2,
      id_category: 2,
    },
    {
      id_product: 3,
      id_category: 3,
    },
  ];

  await ProductCategory.bulkCreate(productCategories);
  console.log("[Database] Se corrió el seeder de Products.");
};
