const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Iller = sequelize.define('Iller', {
    il_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    il_ad: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'iller', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Iller;
