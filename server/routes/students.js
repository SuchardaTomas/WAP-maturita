var express = require("express");
var router = express.Router();

const controller = require("../Controllers/students");

router.get("/", controller.getAllStudents);

router.get("/:id", controller.getStudentById);

router.delete("/:id", controller.deleteStudent);

router.put("/:id", controller.updateStudent);

router.post("/", controller.createStudent);

module.exports = router;
