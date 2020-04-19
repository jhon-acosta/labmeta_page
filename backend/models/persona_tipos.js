const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("persona_tipos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pers_tip_des: {
    type: Sequelize.STRING,
  },
});
