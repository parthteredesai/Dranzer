const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("SERVER IS LISTENING ON PORT 8080");
});

app.use((req, res, next) => {
  console.log("SERVER REQUEST SENT");
  //   res.send("HELLO USER.. RESPONSE SENT SUCCESSFULLY");
  next();
});

app.get("/test", (req, res) => {
  res.send("get req test");
});
