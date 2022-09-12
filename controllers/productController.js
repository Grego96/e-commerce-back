const { Product } = require("../models");
const { Category } = require("../models");

async function index(req, res) {
  if (req.query.categoryId) {
    const products = await Product.findAll({
      where : {categoryId : req.query.categoryId}
    });
    res.status(200).json(products);
  } else {
    const products = await Product.findAll();
    res.status(200).json(products);
  }  
}

async function show(req, res) {
  const product = await Product.findOne(
    { where: { slug: req.params.slug } },
    { include: Category }
  );
  res.status(200).json(product);
}

async function productOutstanding(req, res) {
  const outstandingProducts = await Product.findAll({
    where: { outstanding: true },
  });
  res.status(200).json(outstandingProducts);
}

module.exports = {
  index,
  show,
  productOutstanding,
};
