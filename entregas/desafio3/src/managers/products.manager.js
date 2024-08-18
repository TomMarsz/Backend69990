import Product from "../models/product.model.js";

class ProductManager {
  async getAll() {
    return await Product.find({ status: true })
  }

  async insertOne(newProductInfo) {
    newProductInfo.createdAt = new Date()
    newProductInfo.updatedAt = new Date()
    return await Product.create(newProductInfo)
  }

  async findOne(pid) {
    return await Product.find({ _id: pid, status: true })
  }

  async updateOne(pid, productInfo) {
    productInfo.updatedAt = new Date()
    await Product.updateOne({ _id: pid, status: true }, productInfo)
    return await Product.find({ _id: pid })
  }
  async deleteOne(pid) {
    await Product.updateOne({ _id: pid }, { status: false })
    return await Product.find({ _id: pid })
  }

  async sortByPrice(num) {
    return await Product.find({status: true}).sort({price: num})
  }

  async sortByCategory(num) {
    return await Product.find({status: true}).sort({category: num})
  }

  async limitProducts(num) {
    return await Product.find({status: true}).limit(num)
  }
}

export default ProductManager