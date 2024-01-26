var express = require('express');
var router = express.Router();

const controller = require("../Controllers/cats");

router.get('/', controller.getAllCats);

router.get('/:id', controller.getCatById);

router.delete('/:id', controller.deleteCat);

router.put('/:id', controller.updateCat);

router.post('/', controller.createCat);

module.exports = router;
