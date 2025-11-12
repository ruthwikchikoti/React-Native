import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/dbconfig.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
connectDB()


const app = express()


app.use('/api/auth', authRoutes)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})