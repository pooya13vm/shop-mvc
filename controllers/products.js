const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
  res.render("add-product", {
    docTitle: "add product",
    path: "add-product",
  });
};

exports.postAddProducts = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.listAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "shop",
    });
  });
};
