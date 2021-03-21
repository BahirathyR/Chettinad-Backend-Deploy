const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
exports.Vendor = Vendor;