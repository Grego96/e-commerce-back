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
      first_name: "Maria",
      last_name: "Perez",
      email: "maria@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Coronel Perin",
      phone_number: "1568555215",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "Juan@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "x@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "xfafafafa@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "xv@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "xdd@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "dx@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
    {
      first_name: "Juan",
      last_name: "Lopez",
      email: "xd@gmail.com",
      password: "banana",
      isAdmin: false,
      address: "Av.Italia 1426",
      phone_number: "099 156 243",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
