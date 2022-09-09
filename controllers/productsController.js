const { Product } = require("../models");
const { Category } = require("../models");

async function index(req, res) {
  const products = await Product.findAll();
  res.status(200).json(products);
}

async function show(req, res) {
  const product = await Product.findByPk(req.params.id, { include: Category });
  res.status(200).json(product);
}

async function productOutstanding(req, res) {
  const product = await Product.findAll({ where: { outstanding: true } });
  res.status(200).json(product);
}

module.exports = {
  index,
  show,
  productOutstanding,
};
