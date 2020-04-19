const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("servicios", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  serv_nom: {
    type: Sequelize.STRING,
  },
  serv_des: {
    type: Sequelize.STRING,
  },
});
