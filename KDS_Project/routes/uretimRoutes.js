const express = require('express');
const router = express.Router();
const uretimController = require('../controllers/uretimController');

// Üretim yeri seçim sayfası
router.get('/', uretimController.getUretimPage);

// TOPSIS hesaplama
router.post('/calculate', uretimController.calculateUretim);

module.exports = router;
