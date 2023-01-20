const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");

const { connections } = require("./config/config");
const { UserModel } = require("./models/model");
// const{MensModel} = require("./models/mensschema")
const { UserRouter } = require("./router/userroute");
const { LoginRouter } = require("./router/login");
// const { authenticate } = require("./middleware/authentication_middleware");
const { WomenRouter } = require("./router/product");
const{ MensRouter} = require("./router/mens");
const { BeautyRouter } = require("./router/beauty");
const { KidsRouter } = require("./router/kids");
const app = express();
app.use(cors());

app.use(express.json());
app.use("/user", UserRouter);
app.use("/user", LoginRouter);
// app.use(authenticate);
app.use("/product",WomenRouter)
app.use("/mens", MensRouter,)
app.use("/Makeup",BeautyRouter)
app.use("/kids",KidsRouter)

app.get("/", (req, res) => {
  res.send("WELCOME home");
});

app.listen(process.env.port, async () => {
  try {
    await connections;
    console.log(`connected to database successfully ${process.env.port}`);
  } catch (err) {
    console.log({ error: "error in connecting" });
  }
});
