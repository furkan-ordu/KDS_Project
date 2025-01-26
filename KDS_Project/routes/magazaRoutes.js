// routes/magazaRoutes.js

const express = require('express');
const router = express.Router();
const magazaController = require('../controllers/magazaController');

// Raporlar sayfası
router.get('/', magazaController.getMagazaPage);

module.exports = router;
