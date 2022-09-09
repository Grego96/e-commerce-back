const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [
    {
      first_name: "Gregory",
      last_name: "Hunkeler",
      email: "grego@gmail.com",
      password: await bcrypt.hash("banana", 8),
      isADmin: true,
    },
    {
      first_name: "Manuel",
      last_name: "Perera",
      email: "manuel@gmail.com",
      password: await bcrypt.hash("banana", 8),
      isADmin: true,
    },
    {
      first_name: "Tayra",
      last_name: "Cutri",
      email: "tayra@gmail.com",
      password: await bcrypt.hash("banana", 8),
      isADmin: true,
    },
    {
      first_name: "Maria",
      last_name: "Perez",
      email: "maria@gmail.com",
      password: await bcrypt.hash("banana", 8),
      isADmin: false,
      address: "Coronel Perin",
      phone_number: "1568555215",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
