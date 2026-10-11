const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const user = process.env.SMTP_USER;
const pass = (process.env.SMTP_PASS || '').replace(/['"]/g, '');

console.log('Testing SMTP user:', user, 'has pass:', !!pass, 'pass length:', pass.length);

async function test(port, secure) {
  console.log(`--- Testing port ${port} (secure: ${secure}) ---`);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    tls: {
      rejectUnauthorized: false
    }
  });
  try {
    const res = await transporter.verify();
    console.log(`Port ${port} verification SUCCESS:`, res);
    return true;
  } catch (err) {
    console.log(`Port ${port} verification FAILED:`, err.message, 'code:', err.code, 'response:', err.response);
    return false;
  }
}

(async () => {
  await test(465, true);
  await test(587, false);
})();
