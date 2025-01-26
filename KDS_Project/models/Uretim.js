const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Uretim = sequelize.define('Uretim', {
    üretim_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    üretim_ad: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    il_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'uretim', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Uretim;
