const express = require("express");
const router = express.Router();
const Customerschema = require("../models/customerSchema.js");

//POST route to add a customer to mongodb
router.post("/customer", (req, res) => {
  console.log(`body request ${JSON.stringify(req.body)}`);
  let model = new Customerschema(req.body);
  model
    .save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

//PUT route to update a customer based on email
router.put("/customer", (req, res) => {
  Customerschema.findOneAndUpdate(
    {
      email: req.query.email,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE route to delete a customer based on email
router.delete("/customer", (req, res) => {
  Customerschema.findOneAndRemove(
    {
      email: req.query.email,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
