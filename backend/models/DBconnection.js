const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("MongoDB connected 😘😘"))
  .catch((err) => console.error("😭😭 Mongo error:", err));
