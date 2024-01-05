var express = require('express');
var router = express.Router();

/**
 * GET ALL CATS
 * URL: /
 * Method: GET
 */
router.get('/', (req, res) => {
  res.send('GET ALL CATS');
});

/**
 * GET CAT BY ID
 * URL: http://localhost:3000/cats/idCat
 */
router.get('/:id', (req, res) => {
    res.send('GET CAT ' + req.params.id);
  });

module.exports = router;
