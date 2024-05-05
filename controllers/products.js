const Product = require("../models/product");
//admin controller
exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    docTitle: "add product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
exports.getAdminProductList = (req, res) => {
  res.render("admin/products", {
    docTitle: "admin products list",
    path: "/admin/products",
  });
};
exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    docTitle: "edit product",
    path: "/admin/edit-product",
  });
};

exports.postEditProduct = (req, res) => {
  // const product = new Product(req.body.title);
  // product.save();
  res.redirect("/admin/products");
};
//shop controller
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
exports.listAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "shop",
    });
  });
};
