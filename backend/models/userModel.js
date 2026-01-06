const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

const UserModel = mongoose.model("socialLogins", UserSchema);

module.exports = UserModel;
