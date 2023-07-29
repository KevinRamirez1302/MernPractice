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

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/getPets", (req, res) => {
  petsModel.find().then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
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
app.listen("3001", () => {
  console.log(`Server running on port 3001`);
});
