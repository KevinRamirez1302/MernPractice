const express = require("express");
const app = express();
const mongoose = require("mongoose");
const petsModel = require("./models/pets");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://KevinAlexander13:Aka13020303@cluster0.xg7o66k.mongodb.net/merntest?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors());

app.get("/getPets", (req, res) => {
  petsModel.find().then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/EditUser", (req, res) => {
  petsModel.find().then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/obtenerdata", (req, res) => {
  petsModel.find({ _id: req.body._id }).then((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/createPets", async (req, res) => {
  const newData = req.body;
  console.log(newData);
  const newPet = new petsModel(newData);
  await newPet.save();
  res.json(newData);
});

app.post("/userupdate", (req, res) => {
  petsModel
    .findOneAndUpdate(
      { _id: req.body._id },
      {
        name: req.body.name,
        species: req.body.species,
        age: req.body.age,
      }
    )
    .then((docs, err) => {
      if (!err) {
        res.send(docs);
      } else {
        res.send(err);
      }
    });
});

app.listen("3001", () => {
  console.log(`Server running on port 3001`);
});
