
require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./config/db'); // Veritabanı bağlantısı
const defineAssociations = require('./config/associations'); // İlişkileri tanımlayan dosya



// İlişkileri tanımla
defineAssociations();

const app = express();

// EJS view engine ayarları
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public klasörü
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Dashboard route'larını ekle

const dashboardRoutes = require('./routes/dashboardRoutes');
const uretimRoutes = require('./routes/uretimRoutes');
const urunlerRoutes = require('./routes/urunlerRoutes');
const magazaRoutes = require('./routes/magazaRoutes');
const mapsRoutes = require('./routes/mapsRoutes');




app.use('/', dashboardRoutes);
app.use('/uretim', uretimRoutes);
app.use('/urunler', urunlerRoutes);
app.use('/magaza', magazaRoutes);
app.use('/maps', mapsRoutes);

// 404 Hata Sayfası
app.use((req, res) => {
    res.status(404).render('error', { message: 'Sayfa Bulunamadı!' });
});

// Veritabanı bağlantısını başlat
sequelize.sync({ alter: true, }) // Tablo yoksa oluşturur ve gerekli düzenlemeleri yapar
    .then(() => {
        console.log('Veritabanı başarıyla senkronize edildi!');
        // Sunucuyu çalıştır
        app.listen(3000, () => {
            console.log('Sunucu 3000 portunda çalışıyor');
        });
    })
    .catch(err => {
        console.error('Veritabanı bağlantı hatası:', err);
    });
