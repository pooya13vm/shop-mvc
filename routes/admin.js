const express = require("express");
const path = require("path");
const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProducts);
router.post("/add-product", productsController.postAddProducts);
router.get("/products", productsController.getAdminProductList);
router.get("/edit-product", productsController.getEditProduct);
router.post("/edit-product", productsController.postEditProduct);

module.exports = router;
