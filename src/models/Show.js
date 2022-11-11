//import our db, Model, DataTypes
const { db, DataTypes, Model } = require('../db/db')
class Show extends Model {}

//Creating a User child class from the Model parent class
const Show = db.define("shows", {
    title: DataTypes.STRING,
    genre: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,
    sequelize:db ,
    modelName : "Shows"
});

//exports
module.exports = { Show }
