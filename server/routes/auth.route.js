import express from 'express'
// login & signup routes
import User from '../models/user.model.js'
import generateToken from '../utils/generatetoken.js'
const router = express.Router()

// signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body

    // check if user already exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).json({
            success: false,
            message: 'User already exists'
        })
    }

    const user = await User.create({ name, email, password })
    // generate jwt token
    const token = generateToken(user._id)
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        }
    })

})


// login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    // check if user exists
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User not found'
        })
    }
    // compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({
            success: false,
            message: 'Invalid password'
        })
    }
    // generate jwt token
    const token = generateToken(user._id)
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        }
    })
})

export default router