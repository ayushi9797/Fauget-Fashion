const mongoose = require("mongoose");

const MensSchema = new mongoose.Schema({
  name: String,
  strike_price:String,
  price: Number,
  rating:Number,
  no_of_products:Number,
  thumbnail:String,
  // userID:String,
  
  
});

const MensModel = mongoose.model("mens", MensSchema);

module.exports = {
  MensModel,
};
