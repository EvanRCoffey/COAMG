var express = require('express');
var path = require("path");
var router = express.Router();
var model = require('../models/model.js');

//Home
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

//AboutMe
router.get("/aboutMe", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/aboutMe.html"));
});

//Contact
router.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/contact.html"));
});

//Projects
router.get("/projects", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/projects.html"));
});

//Resources
router.get("/resources", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/resources.html"));
});

// If no matching route is found default to home
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
