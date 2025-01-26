const Iller = require('../models/Iller');
const Parametre = require('../models/Parametre');

const getDashboard = (req, res) => {
    try {
        // Sadece sayfayı render ediyoruz
        res.render('dashboard');
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).send('Sunucu Hatası');
    }
};


module.exports = { getDashboard };
