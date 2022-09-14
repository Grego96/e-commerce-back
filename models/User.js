const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        defaultValue: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  User.beforeBulkCreate(async (users) => {
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

  User.beforeCreate(async (user) => {
   user.password = await bcrypt.hash(user.password, 10)
  });

  return User;
};
