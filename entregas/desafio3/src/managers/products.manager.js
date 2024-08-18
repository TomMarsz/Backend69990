import Product from "../models/product.model.js";

class ProductManager {
	async getAll() {
		try {
			return await Product.find({ status: true })
		} catch (error) {
			throw error
		}
	}

	async insertOne(newProductInfo) {
		try {
			newProductInfo.createdAt = new Date()
			newProductInfo.updatedAt = new Date()
			return await Product.create(newProductInfo)
		} catch (error) {
			throw error
		}
	}

	async findOne(pid) {
		try {
			return await Product.find({ _id: pid, status: true })
		} catch (error) {
			throw error
		}
	}

	async updateOne(pid, productInfo) {
		try {
			productInfo.updatedAt = new Date()
			await Product.updateOne({ _id: pid, status: true }, productInfo)
			return await Product.find({ _id: pid })
		} catch (error) {
			throw error
		}
	}

	async deleteOne(pid) {
		try {
			await Product.updateOne({ _id: pid }, { status: false })
			return await Product.find({ _id: pid })
		} catch (error) {
			throw error
		}
	}

	async enableOne(pid) {
		try {
			await Product.updateOne({ _id: pid }, { status: true })
			return await Product.find({ _id: pid })
		} catch (error) {
			throw error
		}
	}

	async forceDeleteOne(pid) {
		try {
			await Product.deleteOne({ _id: pid })
			return await Product.find({ _id: pid })
		} catch (error) {
			throw error
		}
	}

	async sortByPrice(num) {
		try {
			return await Product.find({ status: true }).sort({ price: num })
		} catch (error) {
			throw error
		}

	}

	async sortByCategory(num) {
		try {
			return await Product.find({ status: true }).sort({ category: num })
		} catch (error) {
			throw error
		}
	}

	async limitProducts(num) {
		try {
			return await Product.find({ status: true }).limit(num)
		} catch (error) {
			throw error
		}
	}
}

export default ProductManager