const express = require("express");
const router = express.Router();
const generalController = require('../controllers/general');


// add product
router.post('/addProduct', generalController.addProduct);

// remove product
router.post('/deleteProductById/:_id', generalController.deleteProductById);

// get all
router.get('/getProduct', generalController.getProduct);

// add product
router.post('/addCategory', generalController.addCategory);

// remove product
router.post('/deleteCategoryId/:_id', generalController.deleteCategoryId);

// get all
router.get('/getCategory', generalController.getCategory);

module.exports = router;