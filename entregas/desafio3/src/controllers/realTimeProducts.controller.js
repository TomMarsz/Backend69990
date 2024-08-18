import { Router } from "express";
import { io } from "../app.js";
import ProductManager from "../managers/products.manager.js";
import HTTP_RESPONSES from "../constants/http-responses.constant.js";

const router = Router()
const productManager = new ProductManager()

router.get('/', async (req, res) => {
  try {
    const products = await productManager.getAll()
    return res.render('realTimeProducts.handlebars', { products, title: 'Challenge05: WebsocketsHandlebars', style: 'realTimeProducts.css' })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { body } = req
    const newProduct = await productManager.insertOne(body)
    const products = await productManager.getAll()
    io.emit('newArrProducts', products)
    return res.status(HTTP_RESPONSES.CREATED).json({ payload: { newProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.delete('/:pid', async (req, res) => {
  try {
    const { pid } = req.params
    const deletedProduct = await productManager.deleteOne(pid)
    const products = await productManager.getAll()
    io.emit('newArrProducts', products)
    return res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { deletedProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

export default router