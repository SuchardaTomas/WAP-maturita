const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  isic: { type: String, required: true },
  classroom: { type: String, required: true },
});

module.exports = mongoose.model("Student", Schema);
