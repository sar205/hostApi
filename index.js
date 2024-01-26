const express = require('express');
require('dotenv').config();
const app = express();


app.get("/product-api", (req, res) => {
    res.json({
        products: [
            {
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",


            },
            {
                id: 2,
                title: "iPhone 10",
                description: "An apple mobile which is nothing like apple",
                price: 5490,
                discountPercentage: 11.96,
                rating: 4.61,
                stock: 94,
                brand: "Apple",
                category: "smartphones",


            },
            {
                id: 3,
                title: "iPhone 11",
                description: "An apple mobile which is nothing like apple",
                price: 5490,
                discountPercentage: 11.96,
                rating: 4.61,
                stock: 94,
                brand: "Apple",
                category: "smartphones",


            },
            {
                id: 4,
                title: "Mi 10 Pro",
                description: "This is the Mi most feature phone",
                price: 5490,
                discountPercentage: 11.96,
                rating: 4.61,
                stock: 94,
                brand: "Apple",
                category: "smartphones",


            },
            {
                id: 5,
                title: "Black Berry",
                description: "This is Black Berry",
                price: 5490,
                discountPercentage: 11.96,
                rating: 4.61,
                stock: 94,
                brand: "Apple",
                category: "smartphones",


            }
        ]
    })
})


function getProductById(id) {

    const products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",


        },
        {
            id: 2,
            title: "iPhone 10",
            description: "An apple mobile which is nothing like apple",
            price: 5490,
            discountPercentage: 11.96,
            rating: 4.61,
            stock: 94,
            brand: "Apple",
            category: "smartphones",


        },
        {
            id: 3,
            title: "iPhone 11",
            description: "An apple mobile which is nothing like apple",
            price: 5490,
            discountPercentage: 11.96,
            rating: 4.61,
            stock: 94,
            brand: "Apple",
            category: "smartphones",


        },
        {
            id: 4,
            title: "Mi 10 Pro",
            description: "This is the Mi most feature phone",
            price: 5490,
            discountPercentage: 11.96,
            rating: 4.61,
            stock: 94,
            brand: "Apple",
            category: "smartphones",


        },
        {
            id: 5,
            title: "Black Berry",
            description: "This is Black Berry",
            price: 5490,
            discountPercentage: 11.96,
            rating: 4.61,
            stock: 94,
            brand: "Apple",
            category: "smartphones",


        }
    ]

    return products.find(product => product.id === id);
}

app.get("/product-api/:id", (req, res) => {

    const productId = parseInt(req.params.id);
    const product = getProductById(productId);

    if (product) {
        res.json({ product });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

const port = process.env.PORT || 300;
app.listen(port, () => {
    console.log("My server is running")
})