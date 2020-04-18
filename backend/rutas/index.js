const { Router } = require("express");

const login = require("../controllers/login");
const persona_genero = require("../controllers/persona_generoCRUD");
const persona_tipo_identificacione = require("../controllers/persona_tipo_identificacioneCRUD");
const persona_tipo = require("../controllers/persona_tipoCRUD");
const persona = require("../controllers/personaCRUD");

const router = Router();

router.get("/", (req, res) => res.send("Bienvenido"));

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

module.exports = router;
