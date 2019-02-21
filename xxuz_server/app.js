const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.js");
const index = require("./routes/index.js");
const detail = require("./routes/detail.js");
const product = require("./routes/product.js");
const cart = require("./routes/cart.js");
const cors = require("cors");
var app = express();
app.listen(5000);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:5001"],
  credentials:true
}));
app.use("/user",user);
app.use("/index",index);
app.use("/detail",detail);
app.use("/product",product);
app.use("/cart",cart);