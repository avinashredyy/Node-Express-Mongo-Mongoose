const mongoose = require("mongoose");

//Connection url string - add you string within the () below
mongoose.connect("mongodb://");

//Creating a schema
const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
