const { Sequelize } = require('sequelize');

// Ortam değişkenlerini kontrol etmek için konsola yazdırın
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.PORT || 3306,
        logging: false, // SQL sorgularını konsola yazdırır
    }
);

sequelize.authenticate()
    .then(() => console.log('Veritabanına başarılı bir şekilde bağlanıldı.'))
    .catch(err => console.error('Veritabanı bağlantı hatası:', err));

module.exports = sequelize;
