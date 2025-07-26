// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.render('products', {
      products,
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
    });
  } catch (err) {
    console.error(' Error fetching products:', err); 
    res.status(500).send('Error loading products');
  }
});

module.exports = router;
