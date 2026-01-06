const express = require("express");
const app = express();

const PORT = process.env.PORT || 8010;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
