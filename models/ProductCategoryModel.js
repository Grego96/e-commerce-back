module.exports = (sequelize, Model, DataTypes) => {
  class ProductCategory extends Model {}

  ProductCategory.init(
    {
      id_product: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      id_category: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "productCategory",
    }
  );

  return ProductCategory;
};
