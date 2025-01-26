const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const MagazaSatis = sequelize.define('MagazaSatis', {
    satis_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    magaza_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    ciro: {
        type: DataTypes.FLOAT, // Ciro genellikle ondalıklı bir sayı olabilir
        allowNull: false,
        defaultValue: 0, // Varsayılan değer 0
    },
}, {
    tableName: 'magaza_satis', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = MagazaSatis;
