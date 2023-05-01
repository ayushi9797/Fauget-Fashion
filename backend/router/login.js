const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const { UserModel } = require("../models/model");
const LoginRouter = express.Router();

app.use(express.json());

//!login ********
//check the password

LoginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length === 0) {
      res.status(404).send("user not found");
    } else {
      console.log(user);
      const hashed_pass = user[0].password;
      console.log(password, hashed_pass);

      if (user.length > 0) {
        bcrypt.hash(password, hashed_pass, (err, result) => {
          console.log(result);
          if (result) {
            const token = jwt.sign({ userID: user[0]._id }, "masai");

            res.send({
              message: "login successfully",
              token: token,
              email: user[0].email,
              name: user[0].fullname,
            });
          } else {
            res.send("wrong cred");
          }
        });
      } else {
        res.send("wrong credentialss");
      }
    }
  } catch (err) {
    console.log({ err: err.message });

    res.send({ msg: "error crede in login" });
  }
});

module.exports = {
  LoginRouter,
};
