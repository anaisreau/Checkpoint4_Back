'use strict';

module.exports = (sequelize, DataTypes) => {
    const reserve = sequelize.define('reserve', {
        nom : 
        {
            type : DataTypes.STRING,
        },
        image1 :
        {
            type : DataTypes.STRING,
        },
        image2 :
        {
            type : DataTypes.STRING,
        },
        description : 
        {
            type : DataTypes.STRING,
        },
        fiche :
        {
            type : DataTypes.STRING,
        },
        codeDep :
        {
            type :  DataTypes.INTEGER,
        },
        nomDep	:
        {
            type : DataTypes.STRING,
        },		
        lat :
        {
          type :  DataTypes.INTEGER,
        },
        longi : 
        {
            type :  DataTypes.INTEGER,
        },
    }, 
    {
        timestamps : false,
 
    }
)
return reserve;
}


