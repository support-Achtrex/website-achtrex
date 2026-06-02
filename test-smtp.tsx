import nodemailer from 'nodemailer';

async function test() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'support@achtrex.com',
            pass: 'krsg kvyz zlzo bnax'
        },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000,
        debug: true,
        logger: true
    });

    try {
        console.log('Verifying connection...');
        await transporter.verify();
        console.log('Connection successful!');
    } catch (e) {
        console.error('Connection failed:', e);
    }
}

test();
