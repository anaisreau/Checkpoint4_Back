'use strict';

module.exports =(sequelize, DataTypes) => { 
    const User = sequelize.define(
    'User',
    {
        first_name : {
           type  : DataTypes.STRING
        },
        last_name : {
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
        underscored : true 
    }
)
return User
}