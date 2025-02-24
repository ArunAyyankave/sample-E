require("dotenv").config()
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const path = require('path')

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.static('uploads'))

mongoose.connect(process.env.MONGO_URL)

app.use(express.json());

app.use("/",userRouter)
app.use("/product",productRouter)

app.listen(process.env.PORT,()=>{
    console.log("server running...");
})