const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.indexPage);
router.get("/products", productsController.listAllProducts);
// it is dynamic root and it must be in the end of "/products/..." root
// i mean fot example "/product/delete" must be in the top of dynamic root
router.get("/products/:productId", productsController.getProductDetail);

router.get("/cart", productsController.getCart);
router.post("/cart", productsController.postCart);

router.get("/checkout", productsController.getCheckout);
router.get("/orders", productsController.getOrders);

module.exports = router;
