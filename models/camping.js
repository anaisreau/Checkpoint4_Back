'use strict';

module.exports =(sequelize, DataTypes) => { 
    const camping = sequelize.define(
    'camping',
    {
        nom : {
           type  : DataTypes.STRING
        },
        adresse : {
            type : DataTypes.STRING
        },
        etoiles : {
            type : DataTypes.INTEGER
        },
        tel : {
            type : DataTypes.INTEGER
        },
        courriel: {
            type : DataTypes.STRING
        },
        lien : {
            type : DataTypes.STRING
        },
    }, 
    {
        timestamps : false,
    }
)
camping.belongsToMany(user, { through: 'user_camping' });
return User
}