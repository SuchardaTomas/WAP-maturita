var express = require("express");
var router = express.Router();

const controller = require("../Controllers/presidents");

router.get("/", controller.getAllPresidents);

router.get("/:id", controller.getPresidentById);

router.delete("/:id", controller.deletePresident);

router.put("/:id", controller.updatePresident);

router.post("/", controller.createPresident);

module.exports = router;
