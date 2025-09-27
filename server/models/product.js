const mongoose = require("mongoose");

const product = new mongoose.Schema({
    name : String,
    price : String,
    quantity : String,
    category : String,
    image : String
})

module.exports = mongoose.model("Products", product);