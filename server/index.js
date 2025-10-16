const express = require("express");
const Category = require("./models/category");
const Product = require("./models/product");
const Registeration = require("./models/registeration");
const connectDB = require("./config/db_connection");
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer  = require('multer')
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })

app.post("/addcategory", upload.single("image"), async(req, res) => {
    try {
        const {name} = req.body;
        const image = req.file.filename;
        await Category.insertOne({name: name, image: image});
        res.status(200).send({message: "Category Inserted"});
    }
    catch(err){
        console.log(err);
    }
})

app.get("/getcategory", async(req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send({message: "Category Fetched", categories});
    }
    catch(err){
        console.log(err);
    }
})

app.post("/addproduct", upload.single("image"), async(req, res) => {
    try {
        const {name, price, quantity, category} = req.body;
        const image = req.file.filename;
        await Product.insertOne({name: name, price: price, quantity: quantity, category: category, image: image});
        res.status(200).send({message: "Product Inserted"});
    }
    catch(err){
        console.log(err);
    }
})


app.get("/getproducts", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({message: "Products Fetched", products});
    }
    catch(err){
        console.log(err);
    }
})


app.post("/register", async(req, res) => {
    try{
        const {name, email, password} = req.body;

        const hashPassword = await bcrypt.hash(password, 10);
        await Registeration.insertOne({name, email, password: hashPassword});
    }
    catch(err){
        console.log(err);
    }
})


app.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;

       const registeredUser = await Registeration.findOne({email: email});
       if(registeredUser){
        const isMatch = await bcrypt.compare(password, registeredUser.password);
        if(isMatch){
            res.status(200).send({mesage: "Login Successfully", registeredUser});
        }
       }
    }
    catch(err){
        console.log(err);
    }
})






app.listen(3000, () => {
    console.log("Server Started");
})





