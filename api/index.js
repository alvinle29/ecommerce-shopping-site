import express from 'express'
import products from './data/Products.js'

const app = express()

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(5000, console.log("Server running on PORT 5000"))