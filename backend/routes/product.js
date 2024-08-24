const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', (req, res) => {
  Product.find().then(products => res.json(products)).catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;