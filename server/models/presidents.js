const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  time_in_function: { type: Number, required: true },
  charisma: { type: Number, required: true },
});

module.exports = mongoose.model("President", Schema);
