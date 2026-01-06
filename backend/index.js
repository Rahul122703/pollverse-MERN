const express = require("express");
const PORT = process.env.PORT || 8010;
const app = express();

const authRouter = require('./routes/authRouter')
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
