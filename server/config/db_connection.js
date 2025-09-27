const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://asadkaptech:06c-estore@cluster0.pplwwbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/mystore");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDB;