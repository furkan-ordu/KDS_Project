// routes/mapRoutes.js

const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/mapsController');

// Harita görünümü sayfası
router.get('/', mapsController.getMapsPage);

module.exports = router;
