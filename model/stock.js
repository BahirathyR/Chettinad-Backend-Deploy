const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({ 
openStock : { // current added stock
    type: Number
  },
  usedStock:{ // how much they are used
    type: Number
  },
  currentStock: { // current stock
    type: Number,
    required: true
  },
  _productId:{
    type: ObjectId,
    required: true
  }
});

const Stock = mongoose.model("Stock", stockSchema);
exports.Stock = Stock;