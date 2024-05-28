const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to: to,
    from: 'noreply@example.com',
    subject: subject,
    text: text,
  };
  await sendgrid.send(msg);
};

module.exports = sendEmail;