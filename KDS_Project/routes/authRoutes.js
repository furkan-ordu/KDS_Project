// routes/usersRoutes.js

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Kullanıcı yönetimi sayfası
router.get('/', usersController.getUsersPage);

module.exports = router;
