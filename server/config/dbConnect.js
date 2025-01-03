const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async() => {
  try {
    const db= mongoose.connect(MONGODB_URI);
    console.log("db Connected");
  } catch(err) {
    console.log(err);
  }
}

module.exports = dbConnect;