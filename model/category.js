const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({ 
name : {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50,
    default: ""
  }
});

const Category = mongoose.model("Category", categorySchema);
exports.Category = Category;