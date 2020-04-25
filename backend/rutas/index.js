const { Router } = require("express");

const cita_detalle = require("../controllers/cita_detalleCRUD");
const cita_estado = require("../controllers/cita_estadoCRUD");
const cita_horario = require("../controllers/cita_horarioCRUD");
const cita = require("../controllers/citaCRUD");
const login = require("../controllers/login");
const persona_genero = require("../controllers/persona_generoCRUD");
const persona_tipo_identificacione = require("../controllers/persona_tipo_identificacioneCRUD");
const persona_tipo = require("../controllers/persona_tipoCRUD");
const persona = require("../controllers/personaCRUD");
const servicio = require("../controllers/servicioCRUD");
const raw = require("../controllers/raw_appointmenthistoryCRUD");

const router = Router();

router.get("/", (req, res) => res.send("Labmeta Ambient"));

router.get("/cita_detalle", cita_detalle.getData);
router.post("/cita_detalle", cita_detalle.postData);
router.put("/cita_detalle", cita_detalle.putData);
router.delete("/cita_detalle", cita_detalle.deleteData);

router.get("/cita_estado", cita_estado.getData);
router.post("/cita_estado", cita_estado.postData);
router.put("/cita_estado", cita_estado.putData);
router.delete("/cita_estado", cita_estado.deleteData);

router.get("/cita_horario", cita_horario.getData);
router.post("/cita_horario", cita_horario.postData);
router.put("/cita_horario", cita_horario.putData);
router.delete("/cita_horario", cita_horario.deleteData);

router.get("/cita", cita.getData);
router.post("/cita", cita.postData);
router.put("/cita", cita.putData);
router.delete("/cita", cita.deleteData);

router.post("/login", login.login);

router.get("/persona", persona.getData);
router.post("/persona", persona.postData);
router.put("/persona", persona.putData);
router.delete("/persona", persona.deleteData);

router.get("/persona_genero", persona_genero.getData);
router.post("/persona_genero", persona_genero.postData);
router.put("/persona_genero", persona_genero.putData);
router.delete("/persona_genero", persona_genero.deleteData);

router.get(
  "/persona_tipo_identificacione",
  persona_tipo_identificacione.getData
);
router.post(
  "/persona_tipo_identificacione",
  persona_tipo_identificacione.postData
);
router.put(
  "/persona_tipo_identificacione",
  persona_tipo_identificacione.putData
);
router.delete(
  "/persona_tipo_identificacione",
  persona_tipo_identificacione.deleteData
);

router.get("/persona_tipo", persona_tipo.getData);
router.post("/persona_tipo", persona_tipo.postData);
router.put("/persona_tipo", persona_tipo.putData);
router.delete("/persona_tipo", persona_tipo.deleteData);

router.get("/servicio", servicio.getData);
router.post("/servicio", servicio.postData);
router.put("/servicio", servicio.putData);
router.delete("/servicio", servicio.deleteData);

router.get("/appointmenthistory", raw.appointmenthistory);

module.exports = router;
