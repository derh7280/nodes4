const nodemailer = require("nodemailer");

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'flo.sanford97@ethereal.email',
        pass: 'ZPe3NjTzxYCkcnRH88'
    }
};

module.exports = nodemailer.createTransport(mailConfig);