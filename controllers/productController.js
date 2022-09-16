const { Category, Product } = require("../models");

async function index(req, res) {
  if (req.query.categoryId) {
    const products = await Product.findAll({
      where: { categoryId: req.query.categoryId },
    });
    res.status(200).json(products);
  } else {
    const products = await Product.findAll({ include: Category });
    res.status(200).json(products);
  }
}

async function show(req, res) {
  const product = await Product.findOne(
    { where: $or[{ slug: req.params.slug }] },
    { include: Category }
  );
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
}

async function store(req, res) {
  const [newProduct, created] = await Product.findOrCreate({
    where: {
      name: req.body.name,
    },
    defaults: {
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price,
      stock: req.body.stock,
      outstanding: req.body.outstanding,
    },
  });
  if (created) {
    res.status(201).json({ message: "product created" });
  } else {
    res.status(400).json({ message: "product name already exist" });
  }
}

async function edit(req, res) {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    try {
      console.log(req.body);
      await product.update({ ...req.body });
      res.status(200).json({ message: "product updated" });
    } catch (error) {
      res.send(error);
      // res.status(402).json({ message: "error editing" });
    }
  } else {
    res.status(402).json({ message: "product not found" });
  }
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
