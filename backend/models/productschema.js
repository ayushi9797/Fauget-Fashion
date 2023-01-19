const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  images:String,
  category: String,
  price:Number,
  discount: Number,
  // userID:String,
  
  
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
  ProductModel,
};

// {
//     "name": "dress",
//     "images":"string",
//     "category": "frock",
//     "price": 7600,
//     "discount": 20
//   }