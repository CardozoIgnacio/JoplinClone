const{ Sequelize} = require('sequelize');

// Option 1: Passing parameters separately
/*
const db= new Sequelize('loginsequelize', 'admindb', '123..456', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
console.log(process.env.DATABASE_URL)
*/
const db = new Sequelize(process.env.DATABASE_URL,{logging:false})
module.exports = db

