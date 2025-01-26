const Parametre = require('../models/Parametre');
const Iller = require('../models/Iller');
const Magaza = require('../models/Magaza');
const MagazaSatis = require('../models/MagazaSatis');
const Uretim = require('../models/Uretim');
const Urun = require('../models/Urun');
const Hammadde = require('../models/Hammadde');

function setupAssociations() {
    // İller ve Parametre ilişkisi (1:1)
    
    Iller.hasOne(Parametre, { as: 'Parametre', foreignKey: 'il_id' });
    Parametre.belongsTo(Iller, { foreignKey: 'il_id' });

    

    // İller ve Mağaza ilişkisi (1:N)
    Iller.hasMany(Magaza, { foreignKey: 'il_id', as: 'Magazalar' });
    Magaza.belongsTo(Iller, { foreignKey: 'il_id', as: 'Il' });

    // Mağaza ve MağazaSatış ilişkisi (1:N)
    Magaza.hasMany(MagazaSatis, { foreignKey: 'magaza_id', as: 'Satislar' });
    MagazaSatis.belongsTo(Magaza, { foreignKey: 'magaza_id', as: 'Magaza' });

    // İller ve Üretim ilişkisi (1:N)
    Iller.hasMany(Uretim, { foreignKey: 'il_id', as: 'Uretimler' });
    Uretim.belongsTo(Iller, { foreignKey: 'il_id', as: 'Il' });

    // Üretim ve Ürün ilişkisi (1:N)
    Uretim.hasMany(Urun, { foreignKey: 'uretim_id', as: 'Urunler' });
    Urun.belongsTo(Uretim, { foreignKey: 'uretim_id', as: 'Uretim' });

    // Ürün ve Hammadde ilişkisi (N:1)
    Hammadde.hasMany(Urun, { foreignKey: 'hammadde_id', as: 'Urunler' });
    Urun.belongsTo(Hammadde, { foreignKey: 'hammadde_id', as: 'Hammadde' });
}

module.exports = setupAssociations;
