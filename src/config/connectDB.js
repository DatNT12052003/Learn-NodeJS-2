
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:')
// const sequelize = new Sequelize('postgres://user:pass@localhost:5432/mydb')

// const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' })

const sequelize = new Sequelize('hoidanit', 'root', null, {
  host: 'localhost',
  dialect: 'mysql', // or 'mysql', 'sqlite', 'mariadb', 'mssql'
  logging: false,
//   logging: false, // Disable logging; default: console.log
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }

});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectDB;