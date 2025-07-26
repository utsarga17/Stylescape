// routes/index.js
const express = require('express');
const router = express.Router();

// GET / - Home Page
router.get('/', (req, res) => {
  res.render('home'); 
});

module.exports = router;
