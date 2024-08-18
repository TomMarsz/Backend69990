import { Router } from "express";
import ProductManager from "../managers/products.manager.js";
import HTTP_RESPONSES from "../constants/http-responses.constant.js";

const router = Router()
const productManager = new ProductManager()

router.get('/', async (req, res) => {
  try {
    const { limit, sortByPrice, sortByCategory } = req.query;
    let products = await productManager.getAll();

    // Limit logic
    if (limit) {
      const limitNum = parseInt(limit);
      if (limitNum <= 0 || isNaN(limitNum)) {
        return res.status(HTTP_RESPONSES.NOT_FOUND_ERROR).render('404.handlebars', {
          error: 'Invalid limit parameter',
          title: '404 Not Found',
          style: 'index.css',
        });
      }
      if (limitNum < products.length) {
        products = await productManager.limitProducts(limitNum);
      }
    }

    // sortByPrice logic
    if (sortByPrice) {
      const sortByPriceNum = parseInt(sortByPrice);
      if (![1, -1].includes(sortByPriceNum)) {
        return res.status(HTTP_RESPONSES.NOT_FOUND_ERROR).render('404.handlebars', {
          error: 'Invalid sortByPrice parameter',
          title: '404 Not Found',
          style: 'index.css',
        });
      }
      products = await productManager.sortByPrice(sortByPriceNum);
    }

    // sortByCategory logic
    if (sortByCategory) {
      const sortByCategoryNum = parseInt(sortByCategory);
      if (![1, -1].includes(sortByCategoryNum)) {
        return res.status(HTTP_RESPONSES.NOT_FOUND_ERROR).render('404.handlebars', {
          error: 'Invalid sortByCategory parameter',
          title: '404 Not Found',
          style: 'index.css',
        });
      }
      products = await productManager.sortByCategory(sortByCategoryNum);
    }

    // Render the final product list
    res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', {
      products,
      title: 'Products | Backend 69990',
      style: 'products.css',
    });

  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});


router.get('/:pid', async (req, res) => {
  const { pid } = req.params
  try {
    const productById = await productManager.findOne(pid)
    res.status(HTTP_RESPONSES.SUCCESS).render('products.handlebars', { productById, title: 'Products | Backend 69990', style: 'products.css' })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { title, description, price, stock, category, thumbnail } = req.body
  try {
    const newProductInfo = { title, description, price, stock, category, thumbnail }
    const newProduct = await productManager.insertOne(newProductInfo)
    res.status(HTTP_RESPONSES.CREATED).json({ payload: { newProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.put('/:pid', async (req, res) => {
  const { pid } = req.params
  const { enableProd } = req.query
  const { title, description, price, stock, category, thumbnail } = req.body
  try {
    if (enableProd === "true") {
      const enableProduct = await productManager.enableOne(pid)
      return res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { enableProduct } })
    }
    if (!title || !description || !price || !stock || !category || !thumbnail) return res.status(HTTP_RESPONSES.BAD_REQUEST).json({ error: error.message })
    const productInfo = { title, description, price, stock, category, thumbnail }
    const updatedProduct = await productManager.updateOne(pid, productInfo)
    res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { updatedProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

router.delete('/:pid', async (req, res) => {
  const { pid } = req.params
  try {
    const deletedProduct = await productManager.deleteOne(pid)
    res.status(HTTP_RESPONSES.ACCEPTED).json({ payload: { deletedProduct } })
  } catch (error) {
    res.status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
})

export default router