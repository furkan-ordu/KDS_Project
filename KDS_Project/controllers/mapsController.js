// controllers/mapController.js

const getMapsPage = (req, res) => {
    // Harita görünümü sayfası render edilir
    res.render('maps', { title: 'Harita Görünümü' });
};

module.exports = {
    getMapsPage,
};
