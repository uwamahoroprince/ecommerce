// packeges
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const bodyPerser = require("body-parser");
const cookiePerser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
require("dotenv").config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//IMPORTING ROUTERS
const authenticationRouter = require("./routers/authentication");
const userRouter = require("./routers/user");
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");
const orderRoutes = require("./routers/order");
// const braintreeRoutes = require("./routers/braintree");

//DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to mongodb database"))
  .catch((err) => console.error(err));

// SETTINGUP MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyPerser.json());
app.use(cookiePerser());
app.use(expressValidator());
app.use(cors());

//SETTING-UP ROUTERS
app.use("/api", authenticationRouter);
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", orderRoutes);
// app.use("/api", braintreeRoutes);

//SERVER CONNECTION
app.listen(port, () => {
  console.log(`listenig to port ${port}`);
});
