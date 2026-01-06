const axios = require("axios");
const { oauth2client } = require("../utils/googleConfig");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;
    const googleResponse = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleResponse.tokens);

    const userResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`
    );

    const { email, name, picture } = userResponse.data;
 
    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        name,
        email,
        profileImage:
          picture ||
          "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg",
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    return res.status(200).json({
      message: "sucess",
      token,
      name,
      email,
      picture,
    });
  } catch (error) {
    console.error("🔥 Google OAuth Error START 🔥");

    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }

    console.error("🔥 Google OAuth Error END 🔥");

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  googleLogin,
};
