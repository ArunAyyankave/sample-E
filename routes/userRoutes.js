const express = require('express');
const userRouter = express.Router()

const userController = require("../controllers/userController")
const auth = require('../middlewares/userAuth')

userRouter.get("/",(req,res)=>{
    res.send("hello welcome to backend api")
})

userRouter.post('/signup',userController.signup)
userRouter.post('/login', userController.login)
userRouter.get('/home',auth, userController.home)

module.exports=userRouter;