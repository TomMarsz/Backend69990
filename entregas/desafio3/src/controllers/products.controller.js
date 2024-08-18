import { Router } from "express";
import productsService from "../services/products.service.js";
import HTTP_RESPONSES from "../constants/http-responses.constant.js";

const router = Router()

router.get('/', async (req, res) => {
  try {
    const { limit, sortByPrice, sortByCategory } = req.query
    const products = await productsService.getAll()


    // Start Limit logic
    if (limit) {
      if (limit >= products.length) {
        return res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { products, title: 'Products | Backend 69990', style: 'products.css' })
      } else if (limit <= 0 || isNaN(limit)) {
        return res.status((HTTP_RESPONSES.NOT_FOUND_ERROR)).render('404.handlebars', { error: 'Invalid limit parameter', title: '404 Not Found', style: 'index.css' })
      } else {
        const productsLimited = await productsService.limitProducts(limit)
        res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productsLimited, title: 'Products | Backend 69990', style: 'products.css' })
      }
    } else {
      return res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { products, title: 'Products | Backend 69990', style: 'products.css' })
    }
    // End Limit logic

    // Start sortByPrice logic
    if (sortByPrice) {
      if (parseInt(sortByPrice) === 1) {
        const productsSortByPriceAsc = await productsService.sortByPrice(parseInt(sortByPrice))
        res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productsSortByPriceAsc, title: 'Products | Backend 69990', style: 'products.css' })
      } else if (parseInt(sortByPrice) === -1) {
        const productsSortByPriceDes = await productsService.sortByPrice(parseInt(sortByPrice))
        res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productsSortByPriceDes, title: 'Products | Backend 69990', style: 'products.css' })
      } else {
        return res.status((HTTP_RESPONSES.NOT_FOUND_ERROR)).render('404.handlebars', { error: 'Invalid sortByPrice parameter', title: '404 Not Found', style: 'index.css' })
      }
    } else {
      return res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { products, title: 'Products | Backend 69990', style: 'products.css' })
    }
    // End sortByPrice logic

    // Start sortByCategory logic
    if (sortByCategory){
      if (parseInt(sortByCategory) === 1) {
        const productsSortByCategoryAsc = await productsService.sortByCategory(parseInt(sortByCategory))
        res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productsSortByCategoryAsc, title: 'Products | Backend 69990', style: 'products.css' })
      } else if (parseInt(sortByCategory) === -1) {
        const productsSortByCategoryDes = await productsService.sortByCategory(parseInt(sortByCategory))
        res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productsSortByCategoryDes, title: 'Products | Backend 69990', style: 'products.css' })
      } else {
        return res.status((HTTP_RESPONSES.NOT_FOUND_ERROR)).render('404.handlebars', { error: 'Invalid sortByCategory parameter', title: '404 Not Found', style: 'index.css' })
      }
    } else {
      return res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { products, title: 'Products | Backend 69990', style: 'products.css' })
    }
    // End sortByCategory logic

  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
});

router.get('/:pid', async (req, res) => {
  try {
    const { pid } = req.params
    const productById = await productsService.findOne(pid)
    res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productById, title: 'Products | Backend 69990', style: 'products.css' })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, description, price, stock, category, thumbnail } = req.body
    const newProductInfo = { title, description, price, stock, category, thumbnail }
    const newProduct = await productsService.insertOne(newProductInfo)
    res.status(HTTP_RESPONSES.CREATED).json({ payload: { newProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.put('/:pid', async (req, res) => {
  try {
    const { pid } = req.params
    const { title, description, price, stock, category, thumbnail } = req.body
    if (!title || !description || !price || !stock || !category || !thumbnail) return res.status(HTTP_RESPONSES.BAD_REQUEST).json({ error: error.message })
    const productInfo = { title, description, price, stock, category, thumbnail }
    const updatedProduct = await productsService.updateOne(pid, productInfo)
    res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { updatedProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.delete('/:pid', async (req, res) => {
  try {
    const { pid } = req.params
    const deletedProduct = await productsService.deleteOne(pid)
    res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { deletedProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

export default router