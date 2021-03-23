const express = require("express");
const router = express.Router();
const generalController = require('../controllers/general');


// add product
router.post('/addProduct', generalController.addProduct);

// remove product using ID
router.delete('/deleteProductById/:_id', generalController.deleteProductById);

// get all Product
router.get('/getProduct', generalController.getProduct);

// add category
router.post('/addCategory', generalController.addCategory);

// remove category by id
router.delete('/deleteCategoryId', generalController.deleteCategoryId);

// get all category
router.get('/getCategory', generalController.getCategory);

// add agent
router.post('/addVendor', generalController.addVendor);

// remove agent
router.delete('/deleteVendorById', generalController.deleteVendorById);

// get all agent list
router.get('/getVendor', generalController.getVendor);

// add Stock values
router.post('/addStock', generalController.addStock);

// get stock details by ID
router.get('/getStockDetailsByProductId', generalController.getStockDetailsByProductId);

// delete stock details by ID
router.delete('/deleteStockById', generalController.deleteStockById);

module.exports = router;