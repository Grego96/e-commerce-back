const { User } = require("../models");

async function index(req, res) {
  const users = User.findAll({
    where: { isAdmin: true },
  });
  res.status(200).json(users);
}

module.exports = { index };
