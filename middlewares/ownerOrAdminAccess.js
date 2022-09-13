const { User, Order } = require("../models");

module.exports = async function (req, res, next) {
  const user = await User.findByPk(req.auth.id);
  const order = await Order.findByPk(req.params.id);
  if (user.isAdmin || order.userId === req.auth.id) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
