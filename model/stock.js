const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({ 
openStock : {
    type: Number
  },
  usedStock:{
    type: Number
  },
  currentStock: {
    type: Number
  },
  _productId:{
    type: ObjectId,
    required: true
  }
});

const Stock = mongoose.model("Stock", categorySchema);
exports.Stock = Stock;