const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("cita_estados", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cita_est_des: {
    type: Sequelize.STRING,
  },
});
