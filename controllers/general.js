const { Product } = require("../model/product");
const { Category } = require("../model/category");


exports.addProduct = async(req, res) => {
    const body = req.body;
    const admin = new Product(body);
    await admin.save();
    return res.status(200).json({
        status: 200,
        message: "Product successfully added.."
    });
}

exports.deleteProductById = async(req, res) => {
    const {_id} = req.params; //assume get 54fcb3890cba9c4234f5c925
    const data = await Product.deleteOne({ _id });
    return res.status(200).json({
        status: 200,
        message: "Successfully Deleted",
        deletedCount: data.deletedCount
    });
}

exports.getProduct = async(req, res) => {
    const data = await Product.find({}, {name:1, _id:0});
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data
    });
}

exports.addCategory = async(req, res) => {
    const body = req.body;
    const admin = new Category(body);
    await admin.save();
    return res.status(200).json({
        status: 200,
        message: "Category successfully added.."
    });
}

exports.deleteCategoryId = async(req, res) => {
    const {_id} = req.params; //assume get 54fcb3890cba9c4234f5c925
    const data = await Category.deleteOne({ _id });
    return res.status(200).json({
        status: 200,
        message: "Successfully Deleted",
        deletedCount: data.deletedCount
    });
}

exports.getCategory = async(req, res) => {
    const data = await Category.find({}, {name: 1, _id:0});
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data
    });
}
