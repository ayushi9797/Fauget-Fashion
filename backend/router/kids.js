const express = require("express");
// const { authenticate } = require("../middleware/authentication_middleware");
const { KidsModel } = require("../models/Kidsschema");


const KidsRouter = express.Router();


KidsRouter.get("/kid", async (req, res) => {
    try {
      const user = await KidsModel.find();
      console.log(user)
      res.send(user);
      console.log(user);
    } catch (error) {
      res.send({ err: "something went wrong" });
    }
  });

  KidsRouter.post("/kid", async (req, res) => {
    const {name, strike_price,price,rating,price_off,no_of_products,thumbnail} = req.body;
    try {
      const data = new KidsModel({ name, strike_price,price,rating,price_off,no_of_products,thumbnail});
      console.log(data)
      await data.save();
      res.send({ "Message": "successfully created" });
    } catch (error) {
      console.log({ "error": error });
      console.log("Something went wrong");
    }
  });




module.exports={
    KidsRouter,
}
