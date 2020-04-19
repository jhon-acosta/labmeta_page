const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("cita_horarios", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cita_hor_des: {
    type: Sequelize.STRING,
  },
});
