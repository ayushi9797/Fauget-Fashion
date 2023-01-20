const mongoose = require("mongoose");

const MakeupSchema = new mongoose.Schema({
    name: String,
    image: String,
    des: String,
    rating: Number,
    price: Number,
    
    id: Number,
   customer_category: String,
    discount: Number,


});

const MakeupModel = mongoose.model("Makeup", MakeupSchema);

module.exports = {
    MakeupModel,
};