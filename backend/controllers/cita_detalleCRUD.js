const Cita_detalle = require("../models/cita_detalles");

const getData = (req, res) => {
  const { query } = req;
  Cita_detalle.findAll({ where: query })
    .then((response) => {
      return res.status(200).json({
        ok: true,
        datos: response,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`,
      });
    });
};

const postData = (req, res) => {
  const datos = req.body.datos;

  Cita_detalle.create(datos)
    .then((response) => {
      return res.status(200).json({
        ok: true,
        datos: response,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`,
      });
    });
};

const putData = (req, res) => {
  const id = req.query.id;
  const datos = req.body.datos;
  Cita_detalle.update(datos, { where: { id } })
    .then((response) => {
      return res.status(200).json({
        ok: true,
        datos: datos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`,
      });
    });
};

const deleteData = (req, res) => {
  const { id } = req.query;

  Cita_detalle.destroy({ where: { id } }).then((response) => {
    return res
      .status(200)
      .json({
        ok: true,
        datos: "Eliminado",
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
  getData,
  postData,
  putData,
  deleteData,
};
