const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50
  },
  status: {
    type: Boolean,
    required: true
  },
  category: {
    type: String
  },
  vendor: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  reserved:{
    type: String,
    required: true
  }

});

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;