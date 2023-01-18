const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  gender:String,
  password: String,
  phone: String,
  
  
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};




// {
//   "fullname": "ayushi",
//   "email": "soniayushi345@gmail.com",
//   "gender": "female",

//   "password": "123",

//   "phone": "123"
// }