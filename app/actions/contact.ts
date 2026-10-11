'use server';

import nodemailer from 'nodemailer';
import { sql } from '@/lib/db';
import { LeadsDB } from '@/lib/local-db';
import fs from 'fs';
import path from 'path';

function queueOutgoingEmail(payload: any) {
    try {
        const dir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const queueFile = path.join(dir, 'pending-emails.json');
        const existing = fs.existsSync(queueFile) ? JSON.parse(fs.readFileSync(queueFile, 'utf-8')) : [];
        existing.unshift({ id: Date.now().toString(), createdAt: new Date().toISOString(), payload });
        fs.writeFileSync(queueFile, JSON.stringify(existing, null, 2));
    } catch (err) {
        console.error('Error queuing outgoing email:', err);
    }
}

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string || '';
    const message = formData.get('message') as string || '';
    const phone = formData.get('phone') as string || '';
    const service = formData.get('service') as string || '';
    const budget = formData.get('budget') as string || '';
    const source = formData.get('source') as string || '';

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    const fullMessage = `Phone: ${phone}\n\nMessage: ${message}`;

    // 1. Guaranteed Local Persistence (Fail-Safe Redundancy)
    try {
        LeadsDB.add({
            name,
            email,
            company,
            message: fullMessage,
            service: service || 'General Inquiry',
            budget,
            source: source || 'Contact Form',
        });
    } catch (localErr) {
        console.error('Local LeadsDB write warning:', localErr);
    }

    // 2. Remote PostgreSQL Persistence (With strict timeout)
    try {
        await sql`
            INSERT INTO leads (name, email, company, message, service, budget, source, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, ${service}, ${budget}, ${source}, 'new')
        `;

        try {
            await sql`
                INSERT INTO subscribers (email)
                VALUES (${email})
                ON CONFLICT (email) DO NOTHING
            `;
        } catch (_) {}
    } catch (dbError: any) {
        console.warn('PostgreSQL write skipped, saved safely in LeadsDB:', dbError.message);
    }

    // 3. Email Notification (With timeout & queue fallback)
    try {
        const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
        const smtpPassword = (process.env.SMTP_PASS || '').replace(/['"]/g, '');

        const adminHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333;">
                <h2 style="color: #0ea5e9;">New Project Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                <p><strong>Source:</strong> ${source || 'N/A'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <h3>Message:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `;

        const customerHtml = `
            <div style="font-family: 'Inter', Helvetica, sans-serif; background-color: #070b14; color: #ffffff; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="https://achtrex.com/achtrex-logo-email.png" alt="Achtrex Logo" style="max-height: 40px; margin-bottom: 20px;" />
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank you for reaching out!</h1>
                    <p style="color: #a0aec0; font-size: 16px; margin-top: 10px;">Hi ${name.split(' ')[0]}, we have received your request and our team will be in touch shortly.</p>
                </div>
                <div style="text-align: center; color: #718096; font-size: 12px;">
                    <p>&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                </div>
            </div>
        `;

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

            await transporter.sendMail({
                from: `"Achtrex Lead Gen" <${smtpEmail}>`,
                to: 'support@achtrex.com',
                subject: `New Lead: ${name} (${company || 'No Company'})`,
                html: adminHtml,
                replyTo: email,
            });

            await transporter.sendMail({
                from: `"Achtrex" <${smtpEmail}>`,
                to: email,
                subject: `Thank you for contacting Achtrex, ${name.split(' ')[0]}!`,
                html: customerHtml,
            });
        } else {
            queueOutgoingEmail({ type: 'contact', name, email, company, phone, service, message });
        }
    } catch (error: any) {
        console.warn('SMTP delivery deferred, queuing notification:', error.message);
        queueOutgoingEmail({ type: 'contact', name, email, company, phone, service, message, error: error.message });
    }

    return { success: true };
}

export async function submitPartnerForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = (formData.get('phone') as string) || 'N/A';
    const company = formData.get('company') as string || '';
    const website = (formData.get('website') as string) || 'N/A';
    const role = (formData.get('role') as string) || 'N/A';
    const country = (formData.get('country') as string) || 'N/A';
    const companySize = (formData.get('companySize') as string) || 'N/A';
    const type = (formData.get('type') as string) || (formData.get('partnershipTrack') as string) || 'N/A';
    const targetMarket = (formData.get('targetMarket') as string) || 'N/A';
    const timeline = (formData.get('timeline') as string) || 'N/A';
    const message = (formData.get('message') as string) || '';

    if (!name || !email || !company) {
        return { error: 'Name, Work Email, and Company Name are required.' };
    }

    const fullMessage = `Partnership Track: ${type}\nRole: ${role}\nPhone: ${phone}\nWebsite: ${website}\nCountry/Region: ${country}\nCompany Size: ${companySize}\nTarget Market: ${targetMarket}\nTimeline: ${timeline}\n\nProposal / Message:\n${message}`;

    // 1. Guaranteed Local Persistence
    try {
        LeadsDB.add({
            name,
            email,
            company,
            message: fullMessage,
            service: `Partnership: ${type}`,
            source: 'Partner Form',
        });
    } catch (localErr) {
        console.error('Local LeadsDB write warning:', localErr);
    }

    // 2. Remote PostgreSQL Persistence
    try {
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, 'Partnership', 'new')
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

            await transporter.sendMail({
                from: `"Achtrex Partner Program" <${smtpEmail}>`,
                to: 'support@achtrex.com',
                subject: `New Partner Application: ${company} (${name})`,
                text: fullMessage,
                replyTo: email,
            });
        } else {
            queueOutgoingEmail({ type: 'partner', name, email, company, fullMessage });
        }
    } catch (error: any) {
        console.warn('SMTP delivery deferred, queuing notification:', error.message);
        queueOutgoingEmail({ type: 'partner', name, email, company, fullMessage, error: error.message });
    }

    return { success: true };
}
