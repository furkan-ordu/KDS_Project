// routes/urunlerRoutes.js

const express = require('express');
const router = express.Router();
const urunlerController = require('../controllers/urunlerController');

// Ayarlar sayfası
router.get('/', urunlerController.geturunlerPage);

module.exports = router;
