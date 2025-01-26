const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Veritabanı bağlantısı

const Hammadde = sequelize.define('Hammadde', {
    hammadde_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hammadde_ad: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    hammadde_para: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    hammadde_miktar: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'hammadde', // Tablo adı
    timestamps: false, // createdAt ve updatedAt kullanılmıyor
});

module.exports = Hammadde;
