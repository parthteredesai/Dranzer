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
const note = require("./models/note.js"); //note model require

//routes require
const noteRoutes = require("./routes/noteRoutes.js");

// Parses incoming requests with JSON payloads
app.use(express.json());
// Built-in URL-encoded parser
app.use(express.urlencoded({ extended: true }));
// app.use is middleware
app.use((req, res, next) => {
  console.log("SERVER REQUEST SENT");
  //   res.send("HELLO USER.. RESPONSE SENT SUCCESSFULLY");
  next();
});

app.listen(port, () => {
  console.log("SERVER IS LISTENING ON PORT 8080");
});

connectDB();

app.use("/note", noteRoutes);
