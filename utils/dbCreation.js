const { Sequelize, DataTypes } = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('digibox', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

require('../models/user')(sequelize, DataTypes)

module.exports = sequelize