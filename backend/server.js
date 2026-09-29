//express require
const express = require("express");
const app = express();

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") }); //dotenv require

//port
let port = process.env.PORT || 8080;

//database config connection
const connectDB = require("./config/databaseConnect.js");

//database model
const note = require("./models/note.js");

//routes require
const noteRoutes = require("./routes/noteRoutes.js");

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
