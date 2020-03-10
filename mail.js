// Cunk 3
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');



const auth = {
    auth: {
        api_key: 'your_mailgun_private_key',
        domain: 'your_mailgun_domain.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// Chunk4

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'owner@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
           return cb(err, null);
        } else {
           return cb(null, data);
        }
    });
}

module.exports = sendMail;
