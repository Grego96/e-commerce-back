const { User } = require("../models");

module.exports = async () => {
  const users = [];



  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
