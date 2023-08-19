//create a folder
//move into that folder
//npm init -y
//open folder using vs
//npm i express

//server instantiate
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//specifically parse json data and add it to the request.body
app.use(bodyParser.json());

//create server on port
app.listen(8000, () => {
  console.log("serve has startes at port 8000");
});

//Routes
app.get("/", (req, res) => {
  res.send("hello abha kesi ho");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully");
});

const mongoose = require("mongoose");

console.log(mongoose.version);

mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
