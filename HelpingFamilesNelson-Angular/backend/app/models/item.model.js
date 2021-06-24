const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    categoryName: String,
    size: String,
    colour: String,
    gender: String,
    age: Number,
    other: String
  })
);

module.exports = Item;
