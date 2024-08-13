const nodemailer = require("nodemailer");


const primaryTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'praffulkumar@gmail.com',
        clientId: '1',
        clientSecret: 'abc',
        refreshToken: '1',
        accessToken: '1'
    }
});


const backupTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'praffulkumar@hotmail.com',
        pass: 'prafful' 
    }
});

module.exports = { primaryTransporter, backupTransporter };
