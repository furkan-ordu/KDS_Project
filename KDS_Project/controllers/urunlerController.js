// controllers/urunlerController.js

const geturunlerPage = (req, res) => {
    // Ayarlar sayfası render edilir
    res.render('urunler', { title: 'Ayarlar' });
};

module.exports = {
    geturunlerPage,
};
