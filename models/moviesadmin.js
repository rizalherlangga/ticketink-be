'use strict';
const {
  Model
} = require('sequelize');
const admin = require('./admin');
module.exports = (sequelize, DataTypes) => {
  class MoviesAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MoviesAdmin.belongsTo(models.Admin, { foreignKey: 'adminId' });
    }
  }
  MoviesAdmin.init({
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
    adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MoviesAdmin',
  });
  return MoviesAdmin;
};