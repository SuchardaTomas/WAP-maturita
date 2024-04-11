const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  company_name: { type: String, required: true },
  money: { type: Number, required: true },
});

module.exports = mongoose.model("Businessman", Schema);
