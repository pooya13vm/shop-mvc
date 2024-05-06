const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.indexPage);
router.get("/products", productsController.listAllProducts);
router.get("/cart", productsController.getCart);
router.get("/checkout", productsController.getCheckout);
router.get("/orders", productsController.getOrders);

module.exports = router;
