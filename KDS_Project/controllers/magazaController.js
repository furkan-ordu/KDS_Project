// controllers/magazaController.js

const getMagazaPage = (req, res) => {
    // Raporlar sayfası render edilir
    res.render('magaza', { title: 'Mağazalar' });
};

module.exports = {
    getMagazaPage,
};
