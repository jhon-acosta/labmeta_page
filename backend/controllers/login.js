const Persona = require("../models/personas");

const login = (req, res) => {
  const pers_cor_ele = req.body.pers_cor_ele;
  const pers_cla = req.body.pers_cla;

  Persona.findAll().then((resultado) => {
    resultado.forEach((element) => {
      if (
        element.pers_cor_ele === pers_cor_ele &&
        element.pers_cla == pers_cla
      ) {
        res.status(200).json({
          ok: true,
          mensaje: "found",
        });
      }
    });
    return res.status(500).json({
      ok: false,
      mensaje: "no-found",
    });
  });
};

module.exports = {
  login,
};
