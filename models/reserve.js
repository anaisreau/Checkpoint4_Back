'use strict';

module.exports = (sequelize, DataTypes) => {
    const reserve = sequelize.define('reserve', {
        nom: {
            type: DataTypes.STRING,
        }
    }, {
    timestamps: false
});

reserve.belongsToMany(user, { through: 'user_reserve' });

return reserve;
};