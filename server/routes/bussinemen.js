var express = require("express");
var router = express.Router();

const controller = require("../Controllers/businessmen");

router.get("/", controller.getAllBusinessmen);

router.get("/:id", controller.getBusinessmanById);

router.delete("/:id", controller.deleteBusinessman);

router.put("/:id", controller.updateBusinessman);

router.post("/", controller.createBusinessman);

module.exports = router;
