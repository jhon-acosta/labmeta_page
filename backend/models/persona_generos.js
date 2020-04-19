const Sequelize = require("sequelize");

const db = require("../config/db");

module.exports = db.sequelize.define("persona_generos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pers_gen_des: {
    type: Sequelize.STRING,
  },
});
