const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      status: "Delivered",
      product_json: [
        {
          quantitiy: 20,
          product: {
            id: 3,
            name: "RadRunner Plus",
            description:
              "Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.",
            images: {
              image1: "RunnerPlus_angle.png",
              image2: "RunnerPlus_side.png",
            },
            price: "1899",
            stock: 5,
            outstanding: true,
            slug: "radrunner-plus",
            createdAt: "2022-09-13T14:38:12.000Z",
            updatedAt: "2022-09-13T14:38:12.000Z",
            categoryId: 2,
          },
        },
        {
          quantitiy: 7,
          product: {
            id: 1,
            name: "RadRover 6 Plus High Step",
            description:
              "The ebike model that started it all: Hop on our flagship fat tire and you may never want to leave. Now in its sixth version, the RadRover 6 Plus powers through all types of weather and terrain, with the technology and design to make it your best ebike ride yet.",
            images: {
              image1: "Rover6HS_charcaol_side.png",
              image2: "Rover6HS_charcoal_angle.png",
            },
            price: "1999",
            stock: 5,
            outstanding: true,
            slug: "radrover-6-plus-high-step",
            createdAt: "2022-09-13T14:38:12.000Z",
            updatedAt: "2022-09-13T14:38:12.000Z",
            categoryId: 1,
          },
        },
      ],
      payment_method: "credit",
      address: "Bv Artigas",
      city: "Montevideo",
      country: "Uruguay",
      phone_number: "099123123",
      postal_code: "90600",
      userId: 1,
    },
    {
      status: "In Progress",
      product_json: [
        {
          quantitiy: 2,
          product: {
            id: 3,
            name: "RadRunner Plus",
            description:
              "Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.",
            images: {
              image1: "RunnerPlus_angle.png",
              image2: "RunnerPlus_side.png",
            },
            price: "1899",
            stock: 5,
            outstanding: true,
            slug: "radrunner-plus",
            createdAt: "2022-09-13T14:38:12.000Z",
            updatedAt: "2022-09-13T14:38:12.000Z",
            categoryId: 2,
          },
        },
      ],
      payment_method: "credit",
      address: "Bv España",
      city: "Montevideo",
      country: "Uruguay",
      phone_number: "099999999",
      postal_code: "90600",
      userId: 1,
    },
    {
      status: "Canceled",
      product_json: [
        {
          quantitiy: 1,
          product: {
            id: 2,
            name: "RadRunner 2",
            description:
              "This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content. ",
            images: {
              image1: "US-RadRunner2-Green-Right-Quarter-View-(1).png",
              image2: "US-RadRunner2-Green-Right-View.png",
            },
            price: "1499",
            stock: 5,
            outstanding: false,
            slug: "radrunner-2",
            createdAt: "2022-09-13T14:38:12.000Z",
            updatedAt: "2022-09-13T14:38:12.000Z",
            categoryId: 3,
          },
        },
      ],
      payment_method: "credit",
      address: "Bv Artigas",
      city: "Montevideo",
      country: "Uruguay",
      phone_number: "099123123",
      postal_code: "90600",
      userId: 4,
    },
    {
      status: "Completed",
      product_json: [
        {
          quantitiy: 5,
          product: {
            id: 2,
            name: "RadRunner 2",
            description:
              "This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content. ",
            images: {
              image1: "US-RadRunner2-Green-Right-Quarter-View-(1).png",
              image2: "US-RadRunner2-Green-Right-View.png",
            },
            price: "1499",
            stock: 5,
            outstanding: false,
            slug: "radrunner-2",
            createdAt: "2022-09-13T14:38:12.000Z",
            updatedAt: "2022-09-13T14:38:12.000Z",
            categoryId: 3,
          },
        },
      ],
      payment_method: "credit",
      address: "Bv Artigas",
      city: "Montevideo",
      country: "Uruguay",
      phone_number: "099123123",
      postal_code: "90600",
      userId: 2,
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
