const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const petsModel = mongoose.model("pet", petsSchema);

module.exports = petsModel;
