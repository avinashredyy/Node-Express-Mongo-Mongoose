const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`Home route`);
});

//localhost:3000/person?id=1
router.get("/person", (req, res) => {
  if (req.query.id) {
    res.send(`requested person with ID ${JSON.stringify(req.query.id)}`);
  } else {
    res.send(`Person route`);
  }
});

//localhost:3000/person/1
router.get("/person/:id", (req, res) => {
  res.send(`ID is ${JSON.stringify(req.params)}`);
});

module.exports = router;
