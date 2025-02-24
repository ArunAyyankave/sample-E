const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signup(req, res) {
    const { username, email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: { username, email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }

}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const userData = await User.findOne({ email: email })

        if (userData) {
            const validPassword = await bcrypt.compare(password, userData.password)
            if (validPassword) {

                const token = jwt.sign(
                    { userId: userData._id, email: userData.email },
                    'secret key',
                    { expiresIn: '1h' }
                )
                res.status(200).json({ message: "Login successful", token})
            } else {
                res.status(400).json({ message: "invalid password" })
            }
        } else {
            res.status(400).json({ message: "user deosn't exist" })
        }
    } catch (error) {

    }

}

function home(req,res){
    console.log('home');
    res.json({data:"products", user: req.user})
    
}

module.exports = {
    signup,
    login,
    home
}