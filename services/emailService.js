const { primaryTransporter, backupTransporter } = require('../config/emailConfig');

let failureCount = 0;
const maxRetries = 3;

async function sendEmail(mailOptions) {
    try {
        await primaryTransporter.sendMail(mailOptions);
        failureCount = 0; 
    } catch (error) {
        failureCount++;
        if (failureCount >= maxRetries) {
            try {
                await backupTransporter.sendMail(mailOptions);
                failureCount = 0;
            } catch (backupError) {
                console.error('Backup email service also failed:', backupError);
                throw new Error('Both primary and backup email services failed');
            }
        } else {
            console.error('Retrying primary email service:', error);
            await sendEmail(mailOptions); // Retry sending email
        }
    }
}

module.exports = { sendEmail };
