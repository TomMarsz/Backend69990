import { Router } from "express";
import CartManager from "../managers/carts.manager.js";
import HTTP_RESPONSES from "../constants/http-responses.constant.js";

const router = Router()
const cartManager = new CartManager()

router.get('/', async (req, res) => {
  try {
    const carts = await cartManager.getAll()
    res.status(HTTP_RESPONSES.SUCCESS).render('carts.handlebars', { carts, title: 'Carts | Backend 69990', style: 'carts.css' })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.get('/:cid', async (req, res) => {
  const { cid } = req.params
  try {
    const cart = await cartManager.findOne(cid)
    res.status(HTTP_RESPONSES.SUCCESS).render('carts.handlebars', { cart, cid, title: 'Carts | Backend 69990', style: 'carts.css' })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const newCart = await cartManager.insertOne()
    res.status(HTTP_RESPONSES.CREATED).json({ payload: { newCart } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.post('/:cid/products/:pid', async (req, res) => {
  const { cid, pid } = req.params
  const quantity = req.body.quantity || 1;
  try {
    const updatedCart = await cartManager.addProductToCart(cid, pid, quantity)
    res.status(HTTP_RESPONSES.CREATED).json({ payload: { updatedCart } })
  }
  catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }

})

export default router