const { Product } = require("../models");

async function index(req, res) {
  const products = await Product.findAll();
  res.status(200).json(products);
}

async function show(req, res) {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json(product);
}

async function productOutstanding(req, res) {
<<<<<<< HEAD
  console.log("hola");
  const product = await Product.findAll({ where: { outstanding: "true" } });
  console.log(product);
  res.status(200).json({ mesasge: "asdfsadfasdf" });
=======
  const product = await Product.findAll({ where: { outstanding: true } });
  res.status(200).json(product);
>>>>>>> 1ecf3d1fcad0d6672704b3bad953b0409b7ab58a
}

module.exports = {
  index,
  show,
  productOutstanding,
};
