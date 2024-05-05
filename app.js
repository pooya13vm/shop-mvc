const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const notFoundRouter = require("./routes/404");

const app = express();

// Setting up Handlebars as the template engine

app.set("view engine", "ejs");
app.set("views", "views");

//* ------pars body:
app.use(bodyParser.urlencoded({ extended: false }));

//* ------define the public folder:
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);
app.use(notFoundRouter);

app.listen(3001);
