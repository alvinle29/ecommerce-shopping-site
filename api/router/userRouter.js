import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import generateToken from "../utils/generateTokens.js"

const userRouter = express.Router()

userRouter.post("/login", asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({email})

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
})
)

userRouter.get('/', asyncHandler(async (req, res) => {
  const products = await User.find({})
  res.json(products)
}))

userRouter.get("/:id", asyncHandler(async (req, res) => {
  const product = await User.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
}))

export default userRouter