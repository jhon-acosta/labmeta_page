const Sequelize = require("sequelize");

const db = require("../config/db");

const persona_tipo_identificacione = require("./persona_tipo_identificaciones");
const persona_genero = require("./persona_generos");
const persona_tipo = require("./persona_tipos");

module.exports = db.sequelize.define("personas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pers_nom: {
    type: Sequelize.STRING,
  },
  pers_tip_ide_id: {
    type: Sequelize.INTEGER,
    references: {
      model: persona_tipo_identificacione,
      key: "id",
    },
  },
  pers_ide: {
    type: Sequelize.STRING,
  },
  pers_tel: {
    type: Sequelize.STRING,
  },
  pers_fec_nac: {
    type: Sequelize.DATE,
  },
  pers_dir: {
    type: Sequelize.STRING,
  },
  pers_gen_id: {
    type: Sequelize.INTEGER,
    references: {
      model: persona_genero,
      key: "id",
    },
  },
  pers_cor_ele: {
    type: Sequelize.STRING,
  },
  pers_cla: {
    type: Sequelize.STRING,
  },
  pers_tip_id: {
    type: Sequelize.INTEGER,
    references: {
      model: persona_tipo,
      key: "id",
    },
  },
  pers_fot: {
    type: Sequelize.STRING,
  },
});
