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

async function register(req, res) {
  const [user, created] = await User.findOrCreate({
    where: {
      email: req.body.email,
    },
    defaults: {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
      address: req.body.address,
      phone_number: req.body.phoneNumber
    },
  });
  if (created) {
    res.status(201).json({message: "User created"});
  } else {
    res.status(400).json({message: "User not created"});
  }
}

async function index(req, res) {
  if (req.query.isAdmin === "true") {
    const adminUsers = await User.findAll({
      where: { isAdmin: true },
    });
    res.status(200).json({ user: adminUsers });
  } else if (req.query.isAdmin === "false") {
    const users = await User.findAll({
      where: { isAdmin: false },
    });
    res.status(200).json(users);
  } else {
    const users = await User.findAll();
    res.status(200).json(users);
  }
}

async function show(req, res) {
  const user = await User.findByPk(req.params.id);
  res.status(200).json(user);
}

async function destroy(req, res) {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.status(200).json({ message: "user deleted" });
  } else {
    res.status(400).json({ message: "user not found" });
  }
}

module.exports = { login, index, show, register, destroy };
