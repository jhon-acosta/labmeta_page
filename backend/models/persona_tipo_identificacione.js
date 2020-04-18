const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("persona_tipo_identificacione", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pers_tip_ide_des: {
    type: Sequelize.STRING,
  },
});
