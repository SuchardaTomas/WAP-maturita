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

/**
 * DELETE CAT 
 */

router.delete('/:id', (req, res) => {
    res.send('DELETE CAT ' + req.params.id);
  });

/**
 *  PUT CAT
 */  

router.put('/:id', (req, res) => {
    res.send('UPDATED CAT ' + req.params.id);
  });

/**
 * POST CAT
 */

router.post('/', (req, res) => {
    res.send('CREATE CAT ');
  });

module.exports = router;
