const Product = require("../models/product");
const Cart = require("../models/cart");
//admin controller
exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    docTitle: "add product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect("/admin/products");
};
exports.getAdminProductList = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "admin products list",
      path: "/admin/products",
    });
  });
};
exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    docTitle: "edit product",
    path: "/admin/edit-product",
  });
};

exports.postEditProduct = (req, res) => {
  Product.findById(proId, (product) => {});
  res.redirect("/admin/products");
};
//---------------------shop controller
exports.indexPage = (req, res, next) => {
  res.render("shop/index", {
    docTitle: "index",
    path: "/",
  });
};
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    docTitle: "Cart",
    path: "/cart",
  });
};
exports.postCart = (req, res, next) => {
  const proId = req.body.productId;
  Product.findById(proId, (product) => {
    Cart.addProduct(proId, product.price);
  });
  res.redirect("/cart");
};
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    docTitle: "Your orders",
    path: "/orders",
  });
};
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    docTitle: "checkout",
    path: "/checkout",
  });
};
exports.listAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "shop",
    });
  });
};

exports.getProductDetail = (req, res, next) => {
  const proId = req.params.productId;

  Product.findById(proId, (product) => {
    res.render("shop/product-detail", {
      product: product,
      docTitle: product.title,
      path: "shop",
    });
  });
};
