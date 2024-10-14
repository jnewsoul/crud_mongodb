const conn = require('../db/conn');
const { ObjectId } = require('mongodb');

class Product {
    constructor(name, price, category, image, description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
        this.description = description;
    }

    // Save a new product to the database
    save() {
        return conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            category: this.category,
            image: this.image,
            description: this.description,
        });
    }

    // Retrieve all products
    static getProducts() {
        return conn.db().collection('products').find().toArray();
    }

    // Retrieve a product by ID
    static async getProductById(id) {
        return await conn.db().collection('products').findOne({ _id: new ObjectId(id) });
    }

    // Remove a product by ID
    static async removeProductById(id) {
        await conn.db().collection('products').deleteOne({ _id: new ObjectId(id) });
    }

    // Update an existing product
    updateProduct(id) {
        return conn.db().collection('products').updateOne({ _id: new ObjectId(id) }, { $set: this });
    }
}

module.exports = Product;
