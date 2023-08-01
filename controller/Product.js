// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;
const model = require("../model/Product");
const Product = model.Product;

// CREATE
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
// READ - All
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

// READ - By ID
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE - REPLACE
exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE - PATCH
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DELETE - By ID
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
