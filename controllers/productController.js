const { Category, Product } = require("../models");

async function index(req, res) {
  if (req.query.categoryId) {
    const products = await Product.findAll({
      where: { categoryId: req.query.categoryId },
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

async function store(req, res) {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price,
      stock: req.body.stock,
      outstanding: req.body.outstanding,
    });
    res.status(201).json({ message: "product created" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
}

async function edit(req, res) {
  //falta
  const product = await Product.findByPk(req.params.id);
  await product.update({ name: req.body.name });
  res.status(201).json({ message: "product updated" });
}

async function destroy(req, res) {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.status(200).json({ message: "product deleted" });
  } else {
    res.status(400).json({ message: "product not found" });
  }
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
  store,
  edit,
  destroy,
};
