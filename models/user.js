'use strict';

const camping = require("./camping");
const reserve = require("./reserve");

module.exports =(sequelize, DataTypes) => { 
    const user = sequelize.define(
    'user',
    {
        prenom : {
           type  : DataTypes.STRING
        },
        nom : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        },
        password: {
            type : DataTypes.STRING
        },
        createdAt : {
            type : DataTypes.DATE,
            defaultValue : DataTypes.NOW
        },
    }, 
    {
        timestamps : false,
    })

    user.belongsToMany(camping, { through: 'user_camping' });
    user.belongsToMany(reserve, { through: 'user_reserve' });

return user
}