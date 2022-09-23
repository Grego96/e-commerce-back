const { Order, User, Product } = require("../models");

async function index(req, res) {
  if (req.query.userId) {
    const orders = await Order.findAll({
      where: { userId: req.query.userId },
    });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "Orders not found." });
    }
  } else {
    const orders = await Order.findAll({ include: User });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "No orders found." });
    }
  }
}

async function show(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: "Order not found." });
  }
}

async function store(req, res) {
  try {
    let productsName = [];
    for (const productJson of req.body.product_json) {
      const product = await Product.findByPk(productJson.product.id);
      if (productJson.quantity > product.stock) {
        productsName.push(product.name);
      }
    }
    if (productsName.length > 0) {
      res
        .status(400)
        .json({ message: `No stock for ${productsName.concat(",")}` });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: "Error." });
    return;
  }
  try {
    const order = await Order.create({
      status: "In Progress",
      product_json: req.body.product_json,
      payment_method: req.body.payment_method,
      userId: req.auth.id,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      phone_number: req.body.phone_number,
      postal_code: req.body.postal_code,
    });
    for (const product of order.product_json) {
      const orderProduct = await Product.findByPk(product.product.id);
      orderProduct.update({ stock: orderProduct.stock - product.quantity });
    }
    res.status(201).json({ message: "Order created!" });
  } catch (error) {
    res.status(400).json({ message: "Empty order or missing information", error: error });
  }
}

async function edit(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (order && req.body.status) {
    await order.update({ status: req.body.status });
    res.status(200).json({ message: "Order status updated." });
  } else {
    res.status(404).json({ message: "Error" });
  }
}

async function destroy(req, res) {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    await order.destroy();
    res.status(200).json({ message: "Product deleted." });
  } else {
    res.status(400).json({ message: "Product not found." });
  }
}

async function getStatusAttributes(req, res) {
  const atributes = await Order.getAttributes().status.values;
  res.status(200).json(atributes);
}

async function getPaymentMethodAttributes(req, res) {
  const atributes = await Order.getAttributes().payment_method.values;
  res.status(200).json(atributes);
}

async function getUserOrders(req, res) {
  const orders = await Order.findAll({
    where: { userId: req.auth.id },
  });
  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404).json({ message: "Orders not found." });
  }
}

module.exports = {
  index,
  getStatusAttributes,
  getPaymentMethodAttributes,
  getUserOrders,
  show,
  store,
  destroy,
  edit
};
