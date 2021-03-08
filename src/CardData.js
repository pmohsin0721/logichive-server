const mongoose = require("mongoose");
const fs = require("fs");

var imgpath = "image1.jpg";

const Schema = mongoose.Schema;
const CardSchema = new Schema({
  imgsrc: String,
  content: String,
  para: String,
});

const CardItem = mongoose.model("Information", CardSchema);

module.exports = CardItem;
