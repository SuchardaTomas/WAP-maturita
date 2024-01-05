exports.getAllCats = (req, res) => {
    res.send('GET ALL CATS');
};

exports.getCatById = (req, res) => {
    res.send('GET CAT ' + req.params.id);
};

exports.deleteCat = (req, res) => {
   res.send('DELETED CAT ' + req.params.id);
};

exports.updateCat = (req, res) => {
   res.send('UPDATED CAT ' + req.params.id);
};

exports.createCat = (req, res) => {
  res.send('CREATED CAT');
};