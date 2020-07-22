'use strict';

const camping = require("./camping");
const reserve = require("./reserve");

module.exports = (sequelize, DataTypes) => {
    const departement = sequelize.define('departement', {
        nom: {
            type: DataTypes.STRING,
        }
      
    }, {
    timestamps: false
});

departement.hasMany(camping)
departement.hasMany(reserve)

return departement;
};