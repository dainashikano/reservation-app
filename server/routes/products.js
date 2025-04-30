const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        return res.json(foundProducts);
    } catch (err) {
        return res.status(500).json({ error: err.message});
    }
})

router.get('/:productId', async function(req, res) {
    try {
        const productId = req.params.productId;
        const foundProduct = await Product.findById(productId);
        return res.json(foundProduct);
    } catch (err) {
        return res.status(500).json({ error: [{title: 'Product error', detail: 'Product not found!'}]});
    }
})

module.exports = router