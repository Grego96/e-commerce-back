const { Order, User } = require("../models");

async function index(req, res) {
  if (req.query.userId) {
    const orders = await Order.findAll({
      where: { userId: req.query.userId },
    });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "orders not found" });
    }
  } else {
    const orders = await Order.findAll({ include: User });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "no orders found" });
    }
  }
}

async function show(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "order not found" });
  }
}

async function store(req, res) {
  try {
    const order = await Order.create({
      status: req.body.status,
      product_json: req.body.product_json,
      payment_method: req.body.payment_method,
      userId: req.auth.id,
    });
    res.status(201).json({ message: "order created" });
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    await order.destroy();
    res.status(200).json({ message: "product deleted" });
  } else {
    res.status(400).json({ message: "product not found" });
  }
}

async function getAttributes(req, res) {
  const atributes = await Order.getAttributes().status.values;
  res.status(200).json(atributes);
}

async function getUserOrders(req, res) {
  const orders = await Order.findAll({
    where: { userId: req.auth.id },
  });
  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404).json({ message: "orders not found" });
  }
}

module.exports = {
  index,
  getAttributes,
  getUserOrders,
  show,
  store,
  destroy,
};
