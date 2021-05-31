const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address: String,
    phone: String,
    tokens: {
      type: Number,
      default: 0
    },
    userType: String,
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
      }
    ],
  })
);

module.exports = User;
