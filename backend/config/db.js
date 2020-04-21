const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("labmeta", "root", "1234", {
  // const sequelize = new Sequelize("SVwDfSmIdQ", "SVwDfSmIdQ", "4FSfPas8ey", {
  //   host: "remotemysql.com",
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
