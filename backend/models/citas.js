const Sequelize = require("sequelize");

const db = require("../config/db");

const cita_estado = require("./cita_estados");
const persona = require("./personas");

module.exports = db.sequelize.define("citas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cita_est_id: {
    type: Sequelize.INTEGER,
    references: {
      model: cita_estado,
      key: "id",
    },
  },
  pers_id_pac: {
    type: Sequelize.INTEGER,
    references: {
      model: persona,
      key: "id",
    },
  },
  cita_hor_cre: {
    type: Sequelize.STRING,
  },
});
