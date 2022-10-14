import express from 'express'
import asyncHandler from 'express-async-handler'

import Product from './models/Product.js'
import Products from './data/Products.js'
import User from './models/User.js'
import Users from './data/Users.js'

const mockData = express.Router()

mockData.post('/user', asyncHandler(async (req, res) => {
  await User.remove({})
  const data = await User.insertMany(Users)
  res.send({ data })
}))

mockData.post('/products', asyncHandler(async (req, res) => {
  await Product.remove({})
  const data = await Product.insertMany(Products)
  res.send({ data })
}))

export default mockData