const Iller = require('../models/Iller');
const Parametre = require('../models/Parametre');
const { calculateTOPSIS } = require('../utils/topsis');

const getUretimPage = async (req, res) => {
    try {
        // Tüm illeri ve ilişkili parametrelerini al
        const iller = await Iller.findAll({
            include: [
                { model: Parametre, as: 'Parametre' } // Alias 'Parametre' kullanıyoruz
            ],
        });

        res.render('uretim', { title: 'Üretim Yeri Seçimi', iller });
    } catch (error) {
        console.error('Veritabanı hatası:', error);
        res.status(500).send('Bir hata oluştu.');
    }
};
const calculateUretim = async (req, res) => {
    try {
        const { weights } = req.body;

        if (!weights || typeof weights !== 'object') {
            return res.status(400).json({ success: false, message: 'Geçersiz ağırlık değerleri gönderildi.' });
        }

        // İller ve ilişkili parametrelerini al
        const iller = await Iller.findAll({
            include: [
                { model: Parametre, as: 'Parametre' }
            ],
        });

        if (!iller.length) {
            return res.status(404).json({ success: false, message: 'Hiçbir il bulunamadı.' });
        }

        // Verileri TOPSIS için uygun formata dönüştür
        const data = iller.map(il => {
            if (!il.Parametre) {
                throw new Error(`Parametre eksik: ${il.il_ad}`);
            }
            return {
                il_id: il.il_id,
                il_ad: il.il_ad, // İller modelinden il_ad alınıyor
                arsa_fiyat: il.Parametre.arsa_fiyat,
                issiz_oran: il.Parametre.issiz_oran,
                ort_sicaklik: il.Parametre.ort_sicaklik,
            };
        });

        // TOPSIS hesapla
        const result = calculateTOPSIS(data, weights);

        if (!result || !Array.isArray(result)) {
            throw new Error('TOPSIS hesaplama sonucunda geçersiz veri döndürüldü.');
        }

        // Sonuçları eşleştir ve yanıt olarak dön
        const response = result.map(item => {
            const il = iller.find(i => i.il_id === item.il_id);
            if (!il) {
                throw new Error(`İl bulunamadı: ${item.il_id}`);
            }
            return {
                il_ad: il.il_ad, // İller modelinden alınıyor
                arsa_fiyat: il.Parametre.arsa_fiyat,
                issiz_oran: il.Parametre.issiz_oran,
                ort_sicaklik: il.Parametre.ort_sicaklik,
                score: item.score,
            };
        });

        res.json({ success: true, result: response });
    } catch (error) {
        console.error('Hesaplama hatası:', error);
        res.status(500).json({ success: false, message: 'Hesaplama sırasında hata oluştu.', error: error.message });
    }
};



module.exports = {
    getUretimPage,
    calculateUretim,
};
