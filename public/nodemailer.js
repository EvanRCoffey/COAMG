'use strict';
const nodemailer = require('nodemailer');

//These three must all be strings
var email = x.email; //Waiting...
var name = x.name; //Waiting...
var message = x.message; //Waiting...

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
    html: '' // html body left blank
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

//
//redirect user to contact-form-thank-you.html
//