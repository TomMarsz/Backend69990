import mongoose from 'mongoose'
import paginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  thumbnail: {
    type: Array,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
})

productSchema.plugin(paginate)

const Product = mongoose.model('products', productSchema)

export default Product