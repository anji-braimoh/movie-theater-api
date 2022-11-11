//import our db, Model, DataTypes
const {DataTypes, Model } = require('sequelize')
const db = require("../db/db")
//Creating a User child class from the Model parent class

class User extends Model {}

User.init (
    {
    username: {
        type:DataTypes.STRING,
    },

    password:{
        type: DataTypes.STRING,
    },
},
   { sequelize:db ,
    modelName : "User"
   
});

//exports
module.exports = { User } 