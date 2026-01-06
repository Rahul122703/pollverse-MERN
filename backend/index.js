const express = require("express");
require("dotenv").config();
require("./models/DBconnection");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8010;
app.use(cors());
app.use(express.json());
// -------------------- Routes --------------------
const authRouter = require("./routes/authRouter");

// -------------------- Middlewares --------------------
app.use("/auth", authRouter);

// -------------------- Health Check --------------------
app.get("/", (req, res) => {
  res.send("HELLO FROM THIS SERVER 😘😘");
});

// -------------------- Server --------------------
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
