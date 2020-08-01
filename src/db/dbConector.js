const{ Sequelize} = require('sequelize');

// Option 1: Passing parameters separately
const db= new Sequelize('loginsequelize', 'admindb', '123..456', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = db

