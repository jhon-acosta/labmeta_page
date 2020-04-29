const Sequelize = require("sequelize");

const db = require("../config/db");

const cita = require("./citas");
const persona = require("./personas");
const servicio = require("./servicios");
const cita_horario = require("./cita_horarios");

module.exports = db.sequelize.define("cita_detalles", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cita_id: {
    type: Sequelize.INTEGER,
    references: {
      model: cita,
      key: "id",
    },
  },
  pers_id_doc: {
    type: Sequelize.INTEGER,
    references: {
      model: persona,
      key: "id",
    },
  },
  serv_id: {
    type: Sequelize.INTEGER,
    references: {
      model: servicio,
      key: "id",
    },
  },
  cita_hor_id: {
    type: Sequelize.INTEGER,
    references: {
      model: cita_horario,
      key: "id",
    },
  },
  cita_det_fec_res: {
    type: Sequelize.STRING,
  },
});
