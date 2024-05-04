const Product = require("../models/ProductModel.js");
const User = require("../models/UserModel.js");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");

exports.getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Product.findAll({
        attributes: ["uuid", "name", "price"],
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findAll({
        attributes: ["uuid", "name", "price"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    let response;
    if (req.role === "admin") {
      response = await Product.findOne({
        attributes: ["uuid", "name", "price"],
        where: {
          id: product.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findOne({
        attributes: ["uuid", "name", "price"],
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const desc = req.body.desc;
  const file = req.files.file;

  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });
  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        name: name,
        price: price,
        desc: desc,
        image: fileName,
        url: url,
        userId: req.userId,
      });
      res.status(201).json({ msg: "Product created successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    let fileName = "";
    if (req.files !== null) {
      const image = req.files.file;

      const fileSize = image.data.length;
      const ext = path.extname(image.name);
      fileName = image.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

      const filepath = `./public/images/${product.image}`;
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      } else {
        console.log("File does not exist:", filepath);
      }

      image.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    } else {
      fileName = product.image;
    }

    const name = req.body.name;
    const price = req.body.price;
    const desc = req.body.desc;
    const stock = req.body.stock;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    if (req.role === "admin") {
      await Product.update(
        {
          name: name,
          price: price,
          desc: desc,
          stock: stock,
          url: url,
          image: fileName,
        },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      if (req.userId !== product.userId) {
        return res.status(403).json({ msg: "Akses ditolak" });
      }
      await Product.update(
        {
          name: name,
          price: price,
          desc: desc,
          stock: stock,
          url: url,
          image: fileName,
        },
        {
          where: {
            [Op.and]: [{ id: product.id }, { userId: req.userId }],
            userId: req.userId,
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    const { name, price } = req.body;

    if (req.role === "admin") {
      await Product.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId) {
        return res.status(403).json({ msg: "Akses ditolak" });
      }
      await Product.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
          userId: req.userId,
        },
      });
    }
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
