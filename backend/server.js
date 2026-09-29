//express require
const express = require("express");
const app = express();

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") }); //dotenv require

//database config connection
const connectDB = require("./config/databaseConnect.js");

//routes require
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

connectDB();

app.use("/note", noteRoutes);
