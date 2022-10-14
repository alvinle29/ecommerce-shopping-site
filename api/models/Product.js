import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  }
)

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  review: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReview: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  stockCount: {
    type: Number,
    required: true,
    default: 0,
  },
},
  {
    timestamps: true
  }
)

const Product = mongoose.model("Product", productSchema);
export default Product