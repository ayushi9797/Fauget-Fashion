const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const { UserModel } = require("../models/model");
const UserRouter = express.Router();

app.use(express.json());

UserRouter.get("/", (req, res) => {
  res.send("WELCOME router");
});

//! ***** REGISTER

UserRouter.post("/register", async (req, res) => {
  let { fullname, email, gender, password, phone } = req.body;
  console.log(req.body);
  const user = await UserModel.find({ email });
  if (user.length > 0) {
    res.send(`user already registered`);
  } else {
    try {
      bcrypt.hash(password, 5, async (err, secure_password) => {
        if (err) {
          console.log({ err: err });
        } else {
          const data = new UserModel({
            fullname,
            email,
            gender,
            password: secure_password,
            phone,
          });
          await data.save();
          res.send({ message: `user successfully registered` });
          
        }
      });
    } catch (error) {
      console.log({ error: error });
      console.log("Something went wrong");
    }
  }
});

module.exports = {
  UserRouter,
};
