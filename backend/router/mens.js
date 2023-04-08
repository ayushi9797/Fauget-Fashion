const express = require("express");
// const { authenticate } = require("../middleware/authentication_middleware");
const { MensModel } = require("../models/mensschema");


const MensRouter = express.Router();


MensRouter.get("/men", async (req, res) => {
    try {
      const user = await MensModel.find();
      console.log(user)
      res.send(user);
      console.log(user);
    } catch (error) {
      res.send({ err: "something went wrong" });
    }
  });

  MensRouter.get("/filter", async (req, res) => {
    try {
      let query = req.query.items;
     let filter = query.replace(/\[|\]/g, "").split(",")
      let products = await MensModel.find({ category: { $in: filter} });
      return res.status(200).send({ products: products });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });




module.exports={
    MensRouter,
}
