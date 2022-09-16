const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "RadRover 6 Plus High Step",
      description:
        "The ebike model that started it all: Hop on our flagship fat tire and you may never want to leave. Now in its sixth version, the RadRover 6 Plus powers through all types of weather and terrain, with the technology and design to make it your best ebike ride yet.",
      price: 1999,
      images: {
        image1: "Rover6HS_charcaol_side.png",
        image2: "Rover6HS_charcoal_angle.png",
      },
      stock: 12,
      outstanding: true,
      categoryId: 3,
    },
    {
      name: "RadRover 6 Plus Step Thru",
      description:
        "Commute. Explore. Or simply do more. The ebike that started it all, does it all. Now in its sixth iteration, our flagship model combines durability and agility into one irresistible ride. Hop on and discover why this is the most imitated ebike in the industry.",
      price: 1599,
      images: {
        image1: "Rover6ST_charcoal_side.png",
        image2: "Rover6ST_charcoal_angle.png",
      },
      stock: 15,
      outstanding: true,
      categoryId: 3,
    },
    {
      name: "RadRunner 2",
      description:
        "This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content. ",
      price: 1299,
      images: {
        image1: "US-RadRunner2-Green-Right-Quarter-View-(1).png",
        image2: "US-RadRunner2-Green-Right-View.png",
      },
      stock: 2,
      outstanding: false,
      categoryId: 1,
    },
    {
      name: "RadRunner Plus",
      description:
        "Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.",
      price: 1899,
      images: {
        image1: "RunnerPlus_side.png",
        image2: "RunnerPlus_angle.png",
      },
      stock: 7,
      outstanding: true,
      categoryId: 1,
    },
    {
      name: "RadWagon 4",
      description:
        "This next-level hauler is perfect for taking the kids across town or loading up at the hardware store. The electric cargo bike's elongated frame and lower center of gravity provide stable, reliable rides, even when you’re taking full advantage of the 350 lb. payload capacity. Take a passenger (or two!) for a spin. Our family-friendly accessories get the whole gang outside.",
      price: 1999,
      images: {
        image2: "WagonOrange_angle_3to4.png",
        image1: "WagonOrange_side_3to4.png",
      },
      stock: 10,
      outstanding: true,
      categoryId: 1,
    },
    {
      name: "RadCity 4",
      description:
        `Dirt path or down pavement, our award-winning commuter ebike is many Rad riders' pick for "all-around" ebike. Its high-step frame design delivers a traditional ride-feel; commute to work and back with the power of a 750W motor, and up to 45+ miles per charge.`,
      price: 1399,
      images: {
        image2: "City4HS_Black_angle.png",
        image1: "City4HS_Black_side.png",
      },
      stock: 5,
      outstanding: false,
      categoryId: 2,
    },
    {
      name: "RadCity 5",
      description:
        `The RadCity 5 Plus makes every trip into a town a joy ride. Hydraulic disc brakes and a 750W geared hub motor help you conquer hills without breaking a sweat, while a semi-integrated battery makes recharging and storing your battery a breeze.`,
      price: 1999,
      images: {
        image2: "City5STPlus_Charcoal_angle.png",
        image1: "City5STCharcoal_side.png",
      },
      stock: 5,
      outstanding: false,
      categoryId: 2,
    },
    {
      name: "RadExpand 5",
      description:
        `Our latest folding ebike has fatter tires to tackle adventures of all sorts. Featuring a step-through frame, and allows you to customize your ride with adjustable handlebars, seven speeds, and four levels of pedal-assist.`,
      price: 1399,
      images: {
        image2: "ExpandBlack_angle.png",
        image1: "ExpandBlack_Side.png",
        image3: "ExpandWhite_27.png"
      },
      stock: 9,
      outstanding: false,
      categoryId: 4,
    },
    {
      name: "RadMission",
      description:
        `The lightest weight model in our lineup, the RadMission is a slick, stylish single-speed electric hybrid bike. Old-school cyclists love the ride-feel, similar to a road bike, while apartment-dwellers relish the ability to lift it up multiple flights of stairs.`,
      price: 899,
      images: {
        image2: "MissionMS_white_angle.png",
        image1: "MissionMS_white_side.png",
      },
      stock: 13,
      outstanding: false,
      categoryId: 2,
    },
    {
      name: "RadRunner 2",
      description:
        `This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content.`,
      price: 1299,
      images: {
        image2: "US-RadRunner2-Green-Right-Quarter-View-(1).png",
        image1: "US-RadRunner2-Green-Right-View.png",
      },
      stock: 3,
      outstanding: false,
      categoryId: 1,
    },
    {
      name: "RadRunner Plus",
      description:
        `Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.`,
      price: 1899,
      images: {
        image2: "RunnerPlus_angle.png",
        image1: "RunnerPlus_side.png",
      },
      stock: 5,
      outstanding: false,
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
