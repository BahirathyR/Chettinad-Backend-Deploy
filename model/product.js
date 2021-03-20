const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50
  }
});

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;