const express = require("express");
const { sendEmail } = require("../services/emailService");

const router = express.Router();

router.post("/send", async (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: "praffulkumar@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await sendEmail(mailOptions);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    res.status(500).send("Failed to send email.");
  }
});

module.exports = router;
