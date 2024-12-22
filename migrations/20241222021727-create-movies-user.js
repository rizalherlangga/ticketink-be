'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MoviesUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Users",
          key:"id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      film: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      writter: {
        type: Sequelize.STRING
      },
      ph: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      poster_url: {
        type: Sequelize.STRING
      },
      trailer_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MoviesUsers');
  }
};