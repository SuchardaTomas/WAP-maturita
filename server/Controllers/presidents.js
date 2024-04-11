const President = require("../models/presidents");

exports.getAllPresidents = async (req, res) => {
  try {
    const result = await President.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Presidents found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Presidents not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPresidentById = async (req, res) => {
  try {
    const result = await President.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "President found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "President not found " });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deletePresident = async (req, res) => {
  try {
    const result = await President.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "President deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePresident = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
      time_in_function: req.body.time_in_function,
      charisma:  req.body.charisma,
    };
    const result = await President.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "President updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "President was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createPresident = async (req, res) => {
  try {
    const data = new President({
      name: req.body.name,
      age: req.body.age,
      time_in_function: req.body.time_in_function,
      charisma:  req.body.charisma,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "President created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "President was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
