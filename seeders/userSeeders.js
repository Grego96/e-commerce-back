const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [
    {
      first_name: "Gregory",
      last_name: "Hunkeler",
      email: "gregoryhunkeler@gmail.com",
      password: "banana",
      isAdmin: true,
    },
    {
      first_name: "Manuel",
      last_name: "Perera",
      email: "manuel@gmail.com",
      password: "banana",
      isAdmin: true,
    },
    {
      first_name: "Tayra",
      last_name: "Cutri",
      email: "tayra@gmail.com",
      password: "banana",
      isAdmin: true,
    },
    {
      first_name: "Admin",
      last_name: "Admin",
      email: "Admin@Admin.com",
      password: "admin",
      isAdmin: true,
    },
    {
      first_name: "Maria",
      last_name: "Perez",
      email: "maria@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Coronel Perin",
      phone_number: "1568555215",
    },
    {
      first_name: "Paula",
      last_name: "Gonzales",
      email: "paula@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "bv Artigas",
      phone_number: "9999999",
    },
    {
      first_name: "Pedro",
      last_name: "Fonsa",
      email: "pedro@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av Brazil",
      phone_number: "123123123",
    },
    {
      first_name: "Alina",
      last_name: "Gabriels",
      email: "alina_gabriels@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "18st",
      phone_number: "099123123",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
