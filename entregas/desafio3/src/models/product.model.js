import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  status: {
    type: Boolean,
    default: true
  },
  stock: Number,
  category: String,
  thumbnail: Array,
  createdAt: Date,
  updatedAt: Date
})

const Product = mongoose.model('products', productSchema)

export default Product