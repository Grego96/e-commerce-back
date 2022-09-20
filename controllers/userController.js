const { User } = require("../models");
const db = require("../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const compare = await user.validatePassword(req.body.password);
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
  try {
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
        phone_number: req.body.phoneNumber,
      },
    });
    if (created) {
      res.status(201).json({ message: "User created" });
    } else {
      res.status(400).json({ message: "email already exist" });
    }
  } catch (error) {
    res.status(400).json({message: "A field is missing", error: error});
    return;
  }
}

async function index(req, res) {
  if (req.query.isAdmin === "true") {
    const adminUsers = await User.findAll({
      where: { isAdmin: true },
      attributes: { exclude: ["password"] },
    });
    res.status(200).json({ users: adminUsers });
  } else if (req.query.isAdmin === "false") {
    const users = await User.findAll({
      where: { isAdmin: false },
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(users);
  } else {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["isAdmin", "DESC"]],
    });
    res.status(200).json(users);
  }
}

async function show(req, res) {
  const user = await User.findAll({
    where: { id: req.params.id },
    attributes: { exclude: ["password"] },
  });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
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

async function storeAdminUser(req, res) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        isAdmin: true,
      },
    });
    if (created) {
      res.status(201).json({ message: "User Adm created" });
    } else {
      res.status(400).json({ message: "email already exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
    return;
  }
}

async function resetDb(req, res) {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  await require("../seeders/categorySeeders")();
  await require("../seeders/productSeeders")();
  await require("../seeders/userSeeders")();
  await require("../seeders/orderSeeders")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  res.status(200).json({message: "Se reinició la base de datos"})
}

module.exports = { login, index, show, register, destroy, storeAdminUser, resetDb };
