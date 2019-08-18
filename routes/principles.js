const express = require("express");
const router = express.Router();

const PrinciplesController = require("../controllers/principles");

// Init database hook
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://<username>:<password>.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }, err => {
  if (err) {
    throw err;
  }
  console.log("Connected to database successfully!");
});
mongoose.connection;

router.route("/").get(PrinciplesController.index);

module.exports = router;
