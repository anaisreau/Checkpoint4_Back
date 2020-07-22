'use strict';

const departement = require("./departement");
const reserve = require("./reserve");
const camping = require("./camping");

module.exports = (sequelize, DataTypes) => {
    const region = sequelize.define('region', {
        nom: {
            type: DataTypes.STRING,
        }
      
    }, {
    timestamps: false
});

region.hasMany(departement);
region.hasMany(reserve)
region.hasMany(camping)

return region;
};