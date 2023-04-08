const mongoose = require("mongoose");

const KidsSchema = new mongoose.Schema({
  name: String,
  strike_price:Number,
  price: Number,
  rating:Number,
  price_off:String, 
  no_of_products:Number,
  thumbnail:String,
  
  
});

const KidsModel = mongoose.model("Kids", KidsSchema);

module.exports = {
  KidsModel,
};
