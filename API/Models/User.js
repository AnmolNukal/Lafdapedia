const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
  username : {
    type : String,
    unique : true,
    required : true
  },
  email : {
    type : String,
    unique : true,
    required : true
  },
 password : {
    type : String,
    required : true
  },
  profilePicture : {
    type : String,
    default : "https://images.pexels.com/photos/4610479/pexels-photo-4610479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
},
  {timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);