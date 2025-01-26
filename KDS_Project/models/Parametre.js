const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Parametre = sequelize.define('Parametre', {
    parametre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    il_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    arsa_fiyat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    issiz_oran: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ort_sicaklik: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: 'parametre', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Parametre;
