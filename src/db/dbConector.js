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
//const db = new Sequelize(process.env.DATABASE_URL,{logging:false,sync:{force:true})
const db = new Sequelize(process.env.DATABASE_URL,{logging:false})

//TODO: Validate connection for invalid usero o down DB
module.exports = db

