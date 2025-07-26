// routes/admin.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Middleware to check if user is admin
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  }
  req.flash('error_msg', 'You are not authorized to access admin area');
  res.redirect('/');
}

router.get('/', isAdmin, async (req, res) => {
  try {
    const products = await Product.find();
    res.render('admin', { products });
  } catch (err) {
    res.status(500).send('Error loading admin dashboard');
  }
});

router.get('/add', isAdmin, (req, res) => {
  res.render('addProduct');
});

// POST /admin/add – Handle Add Product
router.post('/add', isAdmin, async (req, res) => {
  const { name, price, description } = req.body;

  try {
    await Product.create({ name, price, description });
    req.flash('success_msg', 'Product added successfully!');
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating product');
  }
});

// GET /admin/edit/:id – Show Edit Product Form
router.get('/edit/:id', isAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('editProduct', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading product');
  }
});

// POST /admin/edit/:id – Handle Product Update
router.post('/edit/:id', isAdmin, async (req, res) => {
  const { name, price, description } = req.body;

  try {
    await Product.findByIdAndUpdate(req.params.id, {
      name,
      price,
      description
    });
    req.flash('success_msg', 'Product updated!');
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product');
  }
});

module.exports = router;
