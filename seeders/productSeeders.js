const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "RadRover 6 Plus High Step",
      description:
        "The ebike model that started it all: Hop on our flagship fat tire and you may never want to leave. Now in its sixth version, the RadRover 6 Plus powers through all types of weather and terrain, with the technology and design to make it your best ebike ride yet.",
      price: 1999,
      stock: 5,
      outstanding: true,
      categoryId: 1
    },
    {
      name: "RadRunner 2",
      description:
        "This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content. ",
      price: 1499,
      stock: 5,
      outstanding: false,
      categoryId: 3
    },
    {
      name: "RadRunner Plus",
      description:
        "Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.",
      price: 1899,
      stock: 5,
      outstanding: true,
      categoryId: 2
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
