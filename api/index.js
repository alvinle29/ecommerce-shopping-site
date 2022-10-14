import express from 'express'
import dotenv from 'dotenv'

import connectDatabase from "./config/mongo.js"

import products from './data/Products.js'
import mockData from "./mockData.js"
import productRouter from "./router/productRouter.js"

dotenv.config()
const app = express()
connectDatabase()

// API
app.use('/api/import', mockData)
app.use('/api/products', productRouter)

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port ${PORT}`))