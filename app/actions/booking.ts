'use server';

import nodemailer from 'nodemailer';
import { sql } from '@/lib/db';

export async function submitBookingForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string || '';
    const guests = formData.get('guests') as string || '';
    const message = formData.get('message') as string || '';
    const datetime = formData.get('datetime') as string;

    if (!name || !email || !datetime) {
        return { error: 'Name, Email, and Time are required.' };
    }

    let dbErrorOccurred = false;
    let dbErrorMessage = '';
    try {
        const fullMessage = `Demo Booking\nTime: ${datetime}\nGuests: ${guests}\nPhone: ${phone}\n\nNotes: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, '', ${fullMessage}, 'Demo Booking', 'new')
        `;
    } catch (dbError: any) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
        dbErrorMessage = dbError.message || String(dbError);
    }

    try {
        const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
        const smtpPassword = (process.env.SMTP_PASS || '').replace(/['"]/g, '');

        if (!smtpEmail || !smtpPassword) {
            throw new Error('Missing SMTP credentials');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
        });

        // 1. Notification Email to Admin
        const adminHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333;">
                <h2 style="color: #0ea5e9;">New Demo Booking</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Guests:</strong> ${guests || 'N/A'}</p>
                <p><strong>Time:</strong> ${datetime}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <h3>Notes:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `;

        await transporter.sendMail({
            from: `"Achtrex Bookings" <${smtpEmail}>`,
            to: 'support@achtrex.com',
            subject: `New Demo Booking: ${name} at ${datetime}`,
            html: adminHtml,
            replyTo: email
        });

        // 2. Welcome & Meeting Details Email to Customer
        const customerHtml = `
            <div style="font-family: 'Inter', Helvetica, sans-serif; background-color: #070b14; color: #ffffff; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="https://achtrex.com/achtrex-logo-email.png" alt="Achtrex Logo" style="max-height: 40px; margin-bottom: 20px;" />
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Demo Confirmed</h1>
                    <p style="color: #a0aec0; font-size: 16px; margin-top: 10px;">Hi ${name.split(' ')[0]}, your demo with Achtrex is confirmed!</p>
                </div>

                <div style="background-color: #1a1a1c; border: 1px solid #2d3748; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                    <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Meeting Details</h2>
                    <p style="color: #e2e8f0; margin-bottom: 5px;"><strong>Date & Time:</strong> ${datetime}</p>
                    <p style="color: #e2e8f0; margin-bottom: 5px;"><strong>Location:</strong> Phone / Google Meet (Link to follow)</p>
                    <p style="color: #e2e8f0; margin-bottom: 5px;"><strong>Guests:</strong> ${guests || 'None'}</p>
                </div>
                
                <div style="background-color: #111112; border: 1px solid #2d3748; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                    <h2 style="color: #c2fce3; font-size: 20px; margin-top: 0;">Discover Achtrex</h2>
                    <p style="color: #e2e8f0; line-height: 1.6;">Before our meeting, explore the powerful platforms driving innovation at Achtrex:</p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2d3748; display: flex; align-items: start; gap: 15px;">
                        <img src="https://achtrex.com/projects/ad-logo.png" alt="AutomotiveDataset Logo" style="width: 40px; height: 40px; object-fit: contain; border-radius: 8px;" />
                        <div>
                            <h3 style="color: #60a5fa; margin: 0 0 5px 0;">AutomotiveDataset.com</h3>
                            <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 10px 0;">Integrate the world's most comprehensive vehicle specification and market data API into your business.</p>
                            <a href="https://automotivedataset.com" style="color: #60a5fa; text-decoration: none; font-weight: bold; font-size: 14px;">Explore Dataset &rarr;</a>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2d3748; display: flex; align-items: start; gap: 15px;">
                        <img src="https://achtrex.com/logos/lumi-logo.png" alt="LUMI AI Logo" style="width: 40px; height: 40px; object-fit: contain; border-radius: 8px;" />
                        <div>
                            <h3 style="color: #c084fc; margin: 0 0 5px 0;">✨ LUMI AI</h3>
                            <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 10px 0;">Leverage cognitive automotive reasoning to unlock predictive insights and automate vehicle appraisals.</p>
                            <a href="https://achtrex.com/products/lumi" style="color: #c084fc; text-decoration: none; font-weight: bold; font-size: 14px;">Discover LUMI &rarr;</a>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; color: #718096; font-size: 12px;">
                    <p>&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                </div>
            </div>
        `;

        await transporter.sendMail({
            from: `"Achtrex" <${smtpEmail}>`,
            to: email,
            subject: `Demo Confirmed: Achtrex & ${name.split(' ')[0]}`,
            html: customerHtml
        });

        if (dbErrorOccurred) {
            return { success: true, warning: `Booking received, but failed to save to database: ${dbErrorMessage}` };
        }

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        if (dbErrorOccurred) {
            return { error: `Failed to book demo and failed to save to database. DB Error: ${dbErrorMessage}. Email Error: ${error.message}` };
        }
        return { error: `Database saved successfully, but failed to send email. Error: ${error.message}` };
    }
}
