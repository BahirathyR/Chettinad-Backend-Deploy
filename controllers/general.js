const { Product } = require("../model/product");
const { Category } = require("../model/category");
const { Vendor } = require("../model/vendor");

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
    const data = await Product.find({}, {name:1, _id:1});
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data
    });
}

exports.addCategory = async(req, res) => {
    console.log('init addCategory');
    const body = req.body;
    const admin = new Category(body);
    await admin.save();
    return res.status(200).json({
        status: 200,
        message: "Category successfully added.."
    });
}

exports.deleteCategoryId = async(req, res) => {
    const {_id} = req.query;
    const data = await Category.deleteOne({ _id });
    if(data.deletedCount < 1){
        return res.status(404).json({
            status: 404,
            message: "Failed to delete the data",
            deletedCount: data.deletedCount
        });
    }
    else{
    return res.status(200).json({
        status: 200,
        message: "Successfully Deleted",
        deletedCount: data.deletedCount
    });
}
}

exports.getCategory = async(req, res) => {
    console.log('init getCategory')
    const data = await Category.find({}).sort({_id: -1});
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data
    });
}


exports.addVendor = async(req, res) => {
    const body = req.body;
    const admin = new Vendor(body);
    await admin.save();
    return res.status(200).json({
        status: 200,
        message: "Vendor successfully added.."
    });
}

exports.deleteVendorById = async(req, res) => {
    const {_id} = req.query; //assume get 54fcb3890cba9c4234f5c925
    const data = await Vendor.deleteOne({ _id });
    return res.status(200).json({
        status: 200,
        message: "Successfully Deleted",
        deletedCount: data.deletedCount
    });
}

exports.getVendor = async(req, res) => {
    const data = await Vendor.find({}, {name:1, _id:1}).sort({_id: -1});
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data
    });
}
