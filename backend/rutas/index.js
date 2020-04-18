const { Router } = require("express");

const login = require("../controllers/login");
const persona = require("../controllers/personaCRUD");

const router = Router();

router.get("/", (req, res) => res.send("Bienvenido"));

router.post("/login", login.login);

router.get("/persona", persona.getData);
router.post("/persona", persona.postData);
router.put("/persona", persona.putData);
router.delete("/persona", persona.deleteData);

module.exports = router;
