"use strict";

const express = require("express"); // npm install express
const lang = require("./assets/Programming-languages.json");
const app = express();
require("dotenv").config(); // npm i dotenv

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;

//localhost port 3000

app.get("/", (request, response) => {
  response.status(200).send("home route");
});

app.get("/test", (request, response) => {
  response.send("Alive!");
});

let mypetslist = ["sherry", "fluffy", "sandy"];
app.get("/petslist", (request, response) => {
  response.status(200).send(mypetslist);
});

app.get("/langdata", (req, res) => {
  try {
    const langArray = lang.map((obj, index) => {
      return obj.title, obj.dateCreated, obj.description, obj.imageUrl;
    });
    console.log(langArray);
    res.status(200).send(langArray);
  } catch (error) {
    res.status(500).send("error");
  }
});

app.get("*", (request, response) => {
  response.status(404).send("file not found");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
