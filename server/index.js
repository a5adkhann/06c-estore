const express = require("express");
const Category = require("./models/category");
const Product = require("./models/product");
const connectDB = require("./config/db_connection");
const cors = require("cors");
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











app.listen(3000, () => {
    console.log("Server Started");
})





