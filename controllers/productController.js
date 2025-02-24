const Product = require('../models/productModel');

const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        console.log(req.file);
        
        const product = new Product({
            name,
            price,
            description,
            category,
            stock,
            image: req.file.path
        })

        const productData = await product.save();

        res.status(201).json({ message: "product created", data: productData })
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message })
    }
}

const getProducts = async (req,res) => {
    try {        
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

function addToCart(req,res) {
    
}

function getCArt(req,res) {
    
}

const replaceProduct = async (req, res) => {
    console.log(req.params);
}

const editProduct = async (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
}

const deleteProduct = async (req, res) => {
    console.log(req.params);
    console.log(req.params.id)
    console.log(req.params.name)
    res.send(req.params)
}

const searchProduct = async (req, res) => {
    console.log("first")
    console.log(req.query);
    console.log(req.query.name)
}

module.exports = {
    createProduct,
    getProducts,
    addToCart,
    getCArt,
    replaceProduct,
    editProduct,
    deleteProduct,
    searchProduct
}