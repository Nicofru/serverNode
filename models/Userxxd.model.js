const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/dbCreation')

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define('User', {
    // Model attributes are defined here
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Website: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    Type: {
        type: DataTypes.STRING
    }
  }, {
      tableName: 'Utilisateur'
  });
};