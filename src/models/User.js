//import our db, Model, DataTypes
const { db, DataTypes, Model } = require('../../db/db')

//Creating a User child class from the Model parent class

class User extends Model {}

const User = db.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    sequelize:db ,
    modelName : "User"
});

//exports
module.exports = { User } 