const mongoose = require("mongoose");

const registeration = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

module.exports = mongoose.model("Registerations", registeration);