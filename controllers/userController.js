const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_STRING);
      const userInfo = await User.findOne({
        where: { email: req.body.email },
        attributes: ["id", "first_name", "last_name", "email", "isAdmin"],
      });
      res.status(200).json({ token: token, user: userInfo });
    } else {
      res.status(400).json({ message: "Invalid credentials." });
    }
  } else {
    res.status(400).json({ message: "Invalid credentials." });
  }
}

async function index(req, res) {
  if (req.query.isAdmin) {
    const adminUsers = User.findAll({
      where: { isAdmin: true },
    });
    res.status(200).json({ user: adminUsers });
  } else if (!req.query.isAdmin) {
    const users = User.findAll({
      where: { isAdmin: false },
    });
    res.status(200).json(users);
  } else {
    const users = User.findAll();
    res.status(200).json(users);
  }

  res.status(200).json(users);
}

async function show(req, res) {
  const user = await User.findByPK(req.params.id);
  res.status(200).json(user);
}

module.exports = { login, index, show };
