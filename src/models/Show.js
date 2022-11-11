//import our db, Model, DataTypes
const {DataTypes, Model } = require('sequelize')
const db = require("../db/db")
class Show extends Model {}

//Creating a User child class from the Model parent class
Show.init( 
    {
    title: {
        type:DataTypes.STRING,
    },
    genre: {
        type:DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
    },
    rating: {
        type:DataTypes.INTEGER,
    },
    status:{
        type:DataTypes.STRING,
    },
},

    {
    sequelize:db ,
    modelName : "Show"
    }
);

//exports
module.exports = { Show }
