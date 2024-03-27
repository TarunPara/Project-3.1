const nodemailer = require("nodemailer");
const config = require("../config/config");

const sendEmail = async (receiverEmail, otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    // secure: true,
    service: config.mailer.service,
    auth: {
      user: config.mailer.user,
      pass: config.mailer.pass,
    },
  });

  const mailOptions = {
    from: config.mailer.user,
    to: receiverEmail,
    subject: "OTP for Password Reset",
    text: otp,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
  sendEmail,
};
