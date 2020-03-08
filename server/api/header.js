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
router.post("/change-header", (req, res) => {
  Header.findOneAndUpdate("5e653cbaa853fb002defaf59", req.body.header, function(
    err,
    result
  ) {
    if (err) {
      console.log(err);
    }
    console.log("RESULT: " + result);
    res.send("Done");
  });
  // const newHeader = new Header({
  //   headerString: req.body.headerString
  // });
  // newHeader.save().then(header => res.json(header));
});

module.exports = router;
