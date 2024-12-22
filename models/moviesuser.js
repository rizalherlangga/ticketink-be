'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoviesUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MoviesUser.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  MoviesUser.init({
    film: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    writter: DataTypes.STRING,
    ph: DataTypes.STRING,
    duration: DataTypes.STRING,
    release_date: DataTypes.STRING,
    rating: DataTypes.STRING,
    poster_url: DataTypes.STRING,
    trailer_url: DataTypes.STRING,
    userId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MoviesUser',
  });
  return MoviesUser;
};