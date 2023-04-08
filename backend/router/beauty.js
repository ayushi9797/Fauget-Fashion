const express = require("express");
const { MakeupModel } = require("../models/makeupSchema");


const BeautyRouter = express.Router();


BeautyRouter.get("/beauty", async (req, res) => {
    try {
      const user = await MakeupModel.find();
      console.log(user)
      res.send(user);
      console.log(user);
    } catch (error) {
      res.send({ err: "something went wrong" });
    }
  });

//! POST ===========================================================================================

BeautyRouter.post("/beauty", async (req, res) => {
    const {name,image,des,rating,price,category,id,customer_category,discount} = req.body;
    try {
      const data = new MakeupModel({ name,image,des,rating,price,category,id,customer_category,discount});
      console.log(data)
      await data.save();
      res.send({ "Message": "successfully created" });
    } catch (error) {
      console.log({ "error": error });
      console.log("Something went wrong");
    }
  });


module.exports={
    BeautyRouter,
}
