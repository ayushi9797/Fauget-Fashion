const mongoose = require("mongoose");

const MensSchema = new mongoose.Schema({
  imageURL:String,
  brand: String,
  product:String,
  gender: String,
  category:String,
  price:String,
  strikedOffPrice:Number,
  createdAt:String,
  updatedAt:String,
  
  
});

const MensModel = mongoose.model("mens", MensSchema);

module.exports = {
  MensModel,
};
