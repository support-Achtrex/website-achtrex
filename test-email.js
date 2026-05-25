const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'support@achtrex.com',
        pass: 'krsg kvyz zlzo bnax'
    }
});
const name = 'Godwin Achim';
const email = 'achim@achtrex.com';
const company = 'Opticar.ai';
transporter.sendMail({
    from: '"Achtrex Lead Gen" <support@achtrex.com>',
    to: 'support@achtrex.com',
    subject: `New Lead: ${name} (${company || 'No Company'})`,
    html: 'This is a test HTML',
    replyTo: email
}).then(info => console.log('Sent:', info.messageId)).catch(console.error);
