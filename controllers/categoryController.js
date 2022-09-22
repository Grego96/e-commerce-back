const { Category } = require("../models");

async function index(req, res) {
  const categories = await Category.findAll();
  res.status(200).json(categories);
}

async function show(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ message: "Category not found." });
  }
}

async function store(req, res) {
  const [newCategory, created] = await Category.findOrCreate({
    where: {
      name: req.body.name,
    },
    defaults: {
      name: req.body.name,
    },
  });
  if (created) {
    res.status(201).json({ message: "Category created." });
  } else {
    res.status(400).json({ message: "Category not created." });
  }
}

async function edit(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (category && req.body.name) {
    await category.update({ name: req.body.name });
    res.status(200).json({ message: "Category updated." });
  } else {
    res.status(404).json({ message: "Category not found." });
  }
}

async function destroy(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.destroy();
    res.status(200).json({ message: "Category deleted." });
  } else {
    res.status(404).json({ message: "category not found." });
  }
}

module.exports = {
  index,
  show,
  destroy,
  store,
  edit,
};
