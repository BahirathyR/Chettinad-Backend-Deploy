const { Product } = require("../model/product");
const { Category } = require("../model/category");
const { Vendor } = require("../model/vendor");
const { Stock } = require("../model/stock");
const { Cart } = require("../model/cart")
const dateFn = require('date-fn');

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
    
    const data = await Product.find({}).sort({name: -1});
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

exports.addStock = async(req, res) => {
    console.log('init addStock');
    const body = req.body;
    const {_productId, currentStock} = body;
    const admin = new Stock(body);
    await admin.save();
    await Product.update({_id: _productId}, {$set :{ currentStock }})
    return res.status(200).json({
        status: 200,
        message: "Stock successfully added.."
    });
}

exports.getStockDetailsByProductId = async(req, res) => {
    const {_id} = req.query;
    console.log('_id', _id);
    const data = await Stock.find({_productId: _id}).sort({_id: 1});
    const updatedData = data.map(obj =>{
        obj.date = dateFn.date(new Date(obj.date), 143);
        return obj;
    })
    return res.status(200).json({
        status: 200,
        message: "Data successfully fetched",
        data: updatedData
    });
}

exports.deleteStockById = async(req, res) => {
    const {_id} = req.query;
    const data = await Stock.deleteOne({ _id });
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

exports.addCart = async(req, res) => {
    const body = req.body;
    const admin = new Cart(body);
    await admin.save();
    return res.status(200).json({
        status: 200,
        message: "Vendor successfully added.."
    });
}