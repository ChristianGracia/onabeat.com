const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Header = require("../models/Header");

router.get("/", (req, res) => {
  res.send({ hi: "hi" });
});

router.post("/create-header", (req, res) => {
  const newHeader = new Header({
    headerString: req.body.headerString
  });
  newHeader.save().then(header => res.json(header));
});

router.put("/change-header", (req, res) => {
  var update = JSON.parse(req.body);
  Header.findOneAndUpdate("5e653cbaa853fb002defaf59", update, function(
    err,
    result
  ) {
    if (err) {
      console.log(err);
    }
    console.log("RESULT: " + result);
    // res.send("Done: " + Header.headerString);
    res.send("Done: ");
  });
  // const newHeader = new Header({
  //   headerString: req.body.headerString
  // });
  // newHeader.save().then(header => res.json(header));
});
router.get("/all", (req, res) => {
  Header.find()
    // .sort({ date: -1 })
    .then(header => res.json(header))
    .catch(err => res.status(404).json({ noheaderfound: "No header found" }));
});

module.exports = router;
