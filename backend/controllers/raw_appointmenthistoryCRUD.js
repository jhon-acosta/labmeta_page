const db = require("../config/db");

const appointmenthistory = (req, res) => {
  db.sequelize
    .query(
      `select citas.id, (select f_persona(cita_detalles.pers_id_doc)) as pers_id_doc, 
    (select f_persona(citas.pers_id_pac)) as pers_id_pac, 
    (select f_servicio(cita_detalles.serv_id)) as serv_id, 
    cita_detalles.cita_det_fec_res, (select f_cita_horario(cita_detalles.cita_hor_id)) as cita_hor_id,
    (select f_cita_estado(citas.cita_est_id)) as cita_est_id 
    from citas 
    join cita_detalles
    on cita_detalles.cita_id = citas.id
    order by cita_detalles.cita_det_fec_res desc;`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then((response) => {
      return res
        .status(200)
        .json({
          ok: true,
          datos: response,
        })
        .catch((error) => {
          return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`,
          });
        });
    });
};

module.exports = {
  appointmenthistory,
};
