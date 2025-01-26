const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Urun = sequelize.define('Urun', {
    urun_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    urun_ad: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    urun_para: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imalathane_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hammadde_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'urun', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Urun;
