const express = require('express');
const productController = require('../controllers/productController');
const upload = require('../middlewares/uploadImage');

const productRouter = express.Router();

productRouter.post('/addProduct', upload.single('image'), productController.createProduct);
productRouter.get('/getProducts',productController.getProducts)

productRouter.post('/addToCart',productController.addToCart)
productRouter.post('/getCart',productController.getCArt)

productRouter.put('/replaceProduct/:id',productController.replaceProduct)
productRouter.patch('/editProduct/:id',productController.editProduct)
productRouter.delete('/deleteProduct/:id/:name',productController.deleteProduct)

productRouter.post('/search',productController.searchProduct)


module.exports = productRouter;