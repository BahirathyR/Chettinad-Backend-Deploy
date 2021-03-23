const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({ 
name : {
    type: String,
    unique: true,
    required: true,
    minlength: 0,
    maxlength: 50
  }
});

const Category = mongoose.model("Category", categorySchema);
exports.Category = Category;