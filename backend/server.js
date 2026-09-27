const express = require("express");
const app = express();

const noteRoutes = require("./routes/noteRoutes.js");

let port = 8080;

app.listen(port, () => {
  console.log("SERVER IS LISTENING ON PORT 8080");
});

//app.use is middleware
app.use((req, res, next) => {
  console.log("SERVER REQUEST SENT");
  //   res.send("HELLO USER.. RESPONSE SENT SUCCESSFULLY");
  next();
});

app.use("/note", noteRoutes);
