const { Category } = require("../models");

async function index(req, res) {
  const categories = await Category.findAll();
  res.status(200).json(categories);
}

async function show(req, res) {
  const category = await Category.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(category);
}
// async function destroy(req, res) {
//   const category = await Category.d({
//     where: { category: req.query.id },
//   });
//   res.status(200).json(category);
// }

module.exports = {
  index,
  show,
};
