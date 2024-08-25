import Cart from "../models/cart.model.js";

class CartManager {
  async getAll() {
    try {
      return await Cart.find()
    } catch (error) {
      throw error
    }
  }

  async insertOne() {
    try {
      const newCart = new Cart({ products: [] })
      newCart.createdAt = new Date()
      newCart.updatedAt = new Date()
      await newCart.save()
      return newCart
    } catch (error) {
      throw error
    }
  }

  async findOne(cid) {
    try {
      const cart = await Cart.findById(cid)
      if (!cart) throw new Error(`Cart ${cid} not found`);
      return cart
    } catch (error) {
      throw error
    }
  }

  async addProductToCart(cid, pid, quantity = 1) {
    try {
      const cart = await this.findOne(cid)
      const productExist = cart.products.find(item => item.product.toString() === pid)
      productExist ? productExist.quantity += quantity : cart.products.push({ product: pid, quantity })
      cart.markModified("products");
      await cart.save();
      return cart;
    } catch (error) {
      throw error
    }
  }

  async deleteProductFromCart(cid, pid, quantity = 1) {
    try {
      const cart = await this.findOne(cid)
      const productExist = cart.products.find(item => item.product.toString() === pid)
      productExist ? productExist.quantity += quantity : cart.products.push({ product: pid, quantity })
      cart.markModified("products");
      await cart.save();
      return cart;
    } catch (error) {
      throw error
    }
  }

  async updateCart(cid, cartData) {
    try { 
      const cart = await this.findOne(cid)

    } catch (error) {
      throw error
    }
  }
}


export default CartManager