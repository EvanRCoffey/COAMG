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

//Resources
router.post("/newEmail", function(req, res) {
  	'use strict';

	const nodemailer = require('nodemailer');

	//These three must all be strings
	var email = req.body.email;
	var name = req.body.name;
	var message = req.body.message;

	var returnedObj = {
		email: email,
		name: name,
		message: message,
		errors: ''
	}

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    service: 'yahoo',
	    auth: {
	        user: 'molander16@yahoo.com',
	        pass: 'A6d4$nJKD2'
	    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
	    from: email, // sender email
	    to: 'lesleyawilliams7@gmail.com', // list of receivers
	    subject: 'COAMG Email from ' + name, // Subject line including sender name
	    text: message, // plain text body using message contents
	    html: 'blank' // html body left blank
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        console.log("ERROR");
	        console.log(error);
	        console.log(info);
	        returnedObj.errors += error;
	        returnedObj.errors += " ||||| ";
	        returnedObj.errors += info;
	    }
	    else {
	    	console.log('Message %s sent: %s', info.messageId, info.response);
	    	returnedObj.errors += 'Message: ' + info.messageId + ' sent: ' + info.response;
	    }
	    res.json(returnedObj);
	});
});

// If no matching route is found default to home
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
