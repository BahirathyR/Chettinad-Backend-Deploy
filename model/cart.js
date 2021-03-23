const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({ 
productId : {
    type: ObjectId,
    required: true
  },
  status:{
      type:String, //"addCart"
      required: true
  }
});

const Cart = mongoose.model("Cart", cartSchema);
exports.Cart = Cart;