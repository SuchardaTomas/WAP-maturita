const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Teacher", Schema);
