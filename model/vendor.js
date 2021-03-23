const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 0,
    maxlength: 50
  },
  website:{
    type: String
  }
});

const Vendor = mongoose.model("Vendor", vendorSchema);
exports.Vendor = Vendor;