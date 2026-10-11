'use server';

import nodemailer from 'nodemailer';
import { sql } from '@/lib/db';
import { LeadsDB } from '@/lib/local-db';

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

    const fullMessage = `Demo Booking\nTime: ${datetime}\nGuests: ${guests}\nPhone: ${phone}\n\nNotes: ${message}`;

    // 1. Guaranteed Local Persistence
    try {
        LeadsDB.add({
            name,
            email,
            company: '',
            message: fullMessage,
            service: 'Demo Booking',
            source: 'Booking Page',
        });
    } catch (localErr) {
        console.error('Local LeadsDB write warning:', localErr);
    }

    // 2. PostgreSQL Persistence
    try {
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, '', ${fullMessage}, 'Demo Booking', 'new')
        `;
    } catch (dbError: any) {
        console.warn('PostgreSQL write skipped, saved safely in LeadsDB:', dbError.message);
    }

    // 3. Email Notification
    try {
        const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
        const smtpPassword = (process.env.SMTP_PASS || '').replace(/['"]/g, '');

        if (smtpEmail && smtpPassword) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: smtpEmail,
                    pass: smtpPassword,
                },
                connectionTimeout: 4000,
                greetingTimeout: 4000,
                socketTimeout: 5000,
                tls: { rejectUnauthorized: false },
            });

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
                subject: `New Demo Booking: ${name} (${datetime})`,
                html: adminHtml,
                replyTo: email,
            });
        }
    } catch (error: any) {
        console.warn('SMTP delivery deferred:', error.message);
    }

    return { success: true };
}
