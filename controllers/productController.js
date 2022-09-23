const { Category, Product } = require("../models");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
    { where: { slug: req.params.slug } },
    { include: Category }
  );
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found." });
  }
}

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const images = [];
      for (let i = 0; i < Object.entries(files).length; i++) {
        const img = Object.entries(files)[i][1];
        const { data, error } = await supabase.storage
          .from("e-commerce-imgs")
          .upload(img.newFilename, fs.createReadStream(img.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: img.mimetype,
          });
        images.push(
          "https://owyqzdztdgacarhlwyux.supabase.co/storage/v1/object/public/" +
            data.Key
        );
      }

      const imagesJSON = images.reduce(
        (k, v, i) => ({ ...k, ["image" + (i + 1)]: v }),
        {}
      );

      const [newProduct, created] = await Product.findOrCreate({
        where: {
          name: fields.name,
        },
        defaults: {
          name: fields.name,
          description: fields.description,
          images: imagesJSON,
          price: fields.price,
          stock: fields.stock,
          outstanding: fields.outstanding,
          categoryId: fields.categoryId,
        },
      });
      if (created) {
        res.status(201).json({ message: "Product created" });
      } else {
        res
          .status(400)
          .json({ message: "A product with that name already exist" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function edit(req, res) {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (Object.keys(files).length) {
          const images = [];
          for (let i = 0; i < Object.entries(files).length; i++) {
            const img = Object.entries(files)[i][1];
            const { data, error } = await supabase.storage
              .from("e-commerce-imgs")
              .upload(img.newFilename, fs.createReadStream(img.filepath), {
                cacheControl: "3600",
                upsert: false,
                contentType: img.mimetype,
              });
            images.push(
              "https://owyqzdztdgacarhlwyux.supabase.co/storage/v1/object/public/" +
                data.Key
            );
          }

          const imagesJSON = images.reduce(
            (k, v, i) => ({ ...k, ["image" + (i + 1)]: v }),
            {}
          );

          fields.images = imagesJSON;
        } else {
          delete fields.images;
        }
        console.log(fields);
        const x = await product.update({ ...fields });
        console.log(x);
      });

      res.status(200).json({ message: "Product updated." });
    } catch (error) {
      res.send(error);
    }
  } else {
    res.status(402).json({ message: "Product not found." });
  }
}

async function destroy(req, res) {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.status(200).json({ message: "Product deleted." });
  } else {
    res.status(400).json({ message: "Product not found." });
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
