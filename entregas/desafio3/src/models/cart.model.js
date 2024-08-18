import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    products: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }],
    status: {
      type: Boolean,
      default: true
    },
    createdAt: Date,
    updatedAt: Date
  });

const Cart = mongoose.model('carts', cartSchema)

export default Cart