module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.ENUM(
          "Canceled",
          "In Progress",
          "Delivered",
          "Completed"
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      product_json: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          notEmpty: true,
          validCuantity(products) {
            for (const product of products) {
              if (product.quantity < 1 || !product.quantity) {
                throw new Error("There cannot be less than 1 product");
              }
              if (!product.product.id || !product.product.name || !product.product.price) {
                throw new Error("missing information order");
              }
            }
          },
        },
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );

  return Order;
};
