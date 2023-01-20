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




module.exports={
    MensRouter,
}
