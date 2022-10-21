import express from 'express'
import dotenv from 'dotenv'

import connectDatabase from './config/mongo.js'

import mockData from './mockData.js'
import productRouter from './router/productRouter.js'
import userRouter from './router/userRouter.js'

dotenv.config()
const app = express()
connectDatabase()
app.use(express.json())

// API
app.use('/api/import', mockData)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port ${PORT}`))