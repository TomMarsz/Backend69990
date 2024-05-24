import fs from "fs"

class ProductManager {
  static ultId = 0;

  constructor(path) {
    this.products = []
    this.path = path
  }

  async getProducts() {
    try {
      const response = JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
      console.log("All products reached")
      return response;
    } catch (error) {
      throw new Error(`Error reading products: ${error.message}`)
    }
  }

  async addProduct(title, description, price, img, code, stock) {
    try {
      if (!title || !description || !price || !img || !code || !stock) {
        console.log("All fields are mandatory");
        return;
      }
      if (this.products.some(item => item.code === code)) {
        console.log("The code must be unique");
        return;
      }
      const newProduct = {
        id: ++ProductManager.ultId,
        title,
        description,
        price,
        img,
        code,
        stock
      };
      this.products.push(newProduct);
      await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, "\t"))
    } catch (error) {
      throw new Error(`Error adding product: ${error.message}`)
    }
  }

  async getProductById(productId) {
    try {
      const getProductById = this.products.find((p) => p.id === productId);
      console.log(`Product with Id: ${productId} is reached`)
      return getProductById ? [getProductById] : console.log('Product not found.')
    } catch (error) {
      throw new Error(`Error getting product by ID: ${error.message}`)
    }
  }

  async updateProductById(productId, productData) {
    try {
      const products = this.products
      const productIndex = products.findIndex((p) => p.id === productId)
      if (productIndex !== -1) {
        products[productIndex] = {
          ...products[productIndex],
          ...productData,
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"), 'utf-8')
        console.log('Product updated successfully.')
      } else {
        console.log('Product not found.')
        return null
      }
    } catch (error) {
      throw new Error(`Error updating product by ID: ${error.message}`)
    }
  }

  async deleteProductById(productId) {
    try {
      const productIndex = this.products.findIndex((p) => p.id === productId)
      if (productIndex === -1) throw new Error(`Product with ID ${productId} not found`)
      const productsPostDelete = this.products.filter((p) => p.id !== productId)
      await fs.promises.writeFile(`./${this.path}`, JSON.stringify(productsPostDelete, null, "\t"))
      console.log(`Product with Id: ${productId} is deleted`)
    } catch (error) {
      throw new Error(`Error deleting product by ID: ${error.message}`)
    }
  }
}


const productManager = new ProductManager("./products.json");

// Add product
await productManager.addProduct("Producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Error same code
await productManager.addProduct("Producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log(await productManager.getProducts())

// Add 2nd product
await productManager.addProduct("Producto prueba", "este es un producto prueba", 200, "Sin imagen", "def456", 25);
console.log(await productManager.getProducts())

// Get by Id
console.log(await productManager.getProductById(1))

// Update by Id
await productManager.updateProductById(1, {title: "Nuevo titulo", description: "Producto actualizado"})
console.log(await productManager.getProducts())

// Delete by Id
await productManager.deleteProductById(1)
console.log(await productManager.getProducts())