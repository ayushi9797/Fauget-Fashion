const { application } = require("express")
const express = require("express");
const { authenticate } = require("../middleware/authentication_middleware");
const { ProductModel } = require("../models/productschema");

const WomenRouter = express.Router();

WomenRouter.get("/", (req, res) => {
  res.send("WELCOME  Router Women home");
});

WomenRouter.get("/Women", async (req, res) => {
  try {
    const user = await ProductModel.find();
    console.log(user)
    res.send(user);
    console.log(user);
  } catch (error) {
    res.send({ err: "something went wrong" });
  }
});



WomenRouter.post("/Women", async (req, res) => {
    const {name,images,category,price,discount, userID } = req.body;
    try {
      const data = new ProductModel({name,images,category,price,discount,userID });
      console.log(data)
      await data.save();
      res.send({ "Message": "successfully created" });
    } catch (error) {
      console.log({ "error": error });
      console.log("Something went wrong");
    }
  });

module.exports={
    WomenRouter,
}