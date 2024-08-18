import CartManager from "../managers/carts.manager.js"

const Cart = new CartManager()

const getAll = async () => {
  try {
    const carts = await Cart.getAll()
    return carts
  } catch (error) {
    throw error
  }
}

const insertOne = async (newCartInfo) => {
  try {
    const newCart = await Cart.insertOne(newCartInfo)
    return newCart
  } catch (error) {
    throw error
  }
}

const findOne = async (cid) => {
  try {
    const cart = await Cart.findOne(cid)
    return cart
  } catch (error) {
    throw error
  }
}

const addProductToCart = async (cid, pid) => {
  try {
    const updatedCart = await Cart.addProductToCart(cid, pid)
    return updatedCart
  } catch (error) {
    throw error
  }
}

export default {
  getAll,
  insertOne,
  findOne,
  addProductToCart
}