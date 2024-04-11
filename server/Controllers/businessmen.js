const Businessman = require("../models/businessmen");

exports.getAllBusinessmen = async (req, res) => {
  try {
    const result = await Businessman.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Businessmen found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Businessmen not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBusinessmanById = async (req, res) => {
  try {
    const result = await Businessman.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Businessman found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Businessman not found " });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBusinessman = async (req, res) => {
  try {
    const result = await Businessman.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Businessman deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBusinessman = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
      company_name: req.body.company_name,
      money:  req.body.money,
    };
    const result = await Businessman.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Businessman updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Businessman was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createBusinessman = async (req, res) => {
  try {
    const data = new Businessman({
      name: req.body.name,
       age: req.body.age,
       company_name: req.body.company_name,
       money:  req.body.money,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Businessman created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Businessman was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
