const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL;

const connectDB = async () => {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Dranzer Database connected..!"))
    .catch((err) => console.log("Database connection error:", err));
};

module.exports = connectDB;
