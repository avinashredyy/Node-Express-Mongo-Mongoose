const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config/config.json");
const personRoute = require("./routes/person.js");
const customerRoute = require("./routes/customer.js");

const app = express();

//Gives access to request body
app.use(bodyParser.json());

//Middleware to show date info
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));

//Handler for 404
app.use((req, res, next) => {
  res.status(404).send(`404`);
});

//Starts server and listens to requests
app.listen(config.port, () => {
  console.log(`App running on port: ${config.port}`);
});
