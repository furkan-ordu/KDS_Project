const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Magaza = sequelize.define('Magaza', {
    magaza_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    magaza_ad: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    il_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'magaza', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Magaza;
