'use server';

import { sql } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string || '';
    const service = formData.get('service') as string || '';
    const budget = formData.get('budget') as string || '';
    const source = formData.get('source') as string || '';

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    // 1. Save to Database (Resilient)
    // We attempt this first.
    let dbErrorOccurred = false;
    let dbErrorMessage = '';
    try {
        const fullMessage = `Phone: ${phone}\n\nMessage: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, budget, source, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, ${service}, ${budget}, ${source}, 'new')
        `;

        // Auto-subscribe to newsletter (ignore if already exists)
        try {
            await sql`
                INSERT INTO subscribers (email)
                VALUES (${email})
                ON CONFLICT (email) DO NOTHING
            `;
        } catch (subError) {
            console.error('Subscriber insertion warning:', subError);
        }

    } catch (dbError: any) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
        dbErrorMessage = dbError.message || String(dbError);
    }

    // 2. Send Emails via Nodemailer (Gmail/SMTP)
    // This solves the issue of "free tier" restrictions. Gmail allows sending to anyone.
    try {
        const smtpEmail = (process.env.SMTP_USER || 'support@achtrex.com').replace(/['"]/g, '');
        const smtpPassword = (process.env.SMTP_PASS || 'krsg kvyz zlzo bnax').replace(/['"]/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            },
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 10000
        });

        // Email Templates
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

        const userHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Achtrex</title>
    <style>
        body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif; color: #334155; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f1f5f9; padding: 40px 0; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-collapse: collapse; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { padding: 40px 20px; text-align: center; background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); }
        .content { padding: 40px 30px; text-align: left; line-height: 1.6; font-size: 16px; color: #334155; }
        .footer { padding: 30px; text-align: center; font-size: 12px; color: #64748b; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
        a { color: #3b82f6; text-decoration: none; font-weight: 500; }
        .btn { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; margin: 20px 0; }
        h1, h2, h3 { color: #0f172a; }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main">
            <tr>
                <td class="header">
                    <img src="https://www.achtrex.com/achtrex-logo-email.png" alt="ACHTREX" width="140" style="margin: 0 auto 10px auto; display: block;">
                    <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.9); margin: 0; font-weight: 600;">Enterprise Data & AI Platforms</p>
                </td>
            </tr>

            <tr>
                <td>
                    <img src="https://www.achtrex.com/email-banner.jpg" alt="Achtrex Team" width="600" style="width: 100%; height: auto; display: block;">
                </td>
            </tr>

            <tr>
                <td class="content">
                    <h1>Thanks for reaching out!</h1>
                    <p>Hello <strong>${name}</strong>,</p>
                    <p>We’ve received your inquiry regarding <strong>${service || 'a potential collaboration'}</strong> and our team is already reviewing your details. At Achtrex, we don’t just write code - we architect solutions that propel businesses forward.</p>
                    
                     <div style="background-color: #f8fafc; border-left: 4px solid #10b981; padding: 15px; margin: 25px 0; border-radius: 4px;">
                        <p style="margin: 0; color: #334155; font-size: 14px;"><strong>Your Message:</strong><br/>
                        <span style="color: #64748b;">${message}</span></p>
                    </div>

                    <p>While we prepare a tailored response for you, here is a quick look at how we help our global partners scale.</p>
                    
                    <a href="https://achtrex.com/portfolio" class="btn">View Our Portfolio</a>
                    
                    <h3 style="margin-top: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Our Expertise</h3>
                    
                    <div style="margin-bottom: 20px;">
                        <strong style="color: #0f172a; font-size: 16px;">Product Engineering</strong>
                        <p style="margin: 5px 0 0; font-size: 14px; color: #64748b;">End-to-end software development transforming complex requirements into scalable solutions.</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <strong style="color: #0f172a; font-size: 16px;">UI/UX Design</strong>
                        <p style="margin: 5px 0 0; font-size: 14px; color: #64748b;">Crafting immersive user experiences that blend aesthetics with intuitive functionality.</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <strong style="color: #0f172a; font-size: 16px;">AI & Tech Consulting</strong>
                        <p style="margin: 5px 0 0; font-size: 14px; color: #64748b;">Harnessing AI integration and strategic architecture to modernize your tech stack.</p>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="footer">
                    <p style="margin: 0 0 10px 0;"><strong>Achtrex Studio</strong></p>
                    <p style="margin: 0 0 15px 0;">Accra, Ghana | New Jersey, USA</p>
                    <p style="margin: 0;">
                        <a href="https://achtrex.com">Website</a> | 
                        <a href="https://achtrex.com/blog">Blog</a>
                    </p>
                    <p style="margin: 15px 0 0 0; font-size: 11px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
\`;l>
        `;

        // Send Admin Notification
        await transporter.sendMail({
            from: `"Achtrex Website" <${smtpEmail}>`,
            to: "support@achtrex.com, info@achtrex.com",
            subject: `New Lead: ${name} (${company || 'No Company'})`,
            html: adminHtml,
            replyTo: email
        });

        // Send User Welcome Email
        // With Gmail, this will successfully land in the user's inbox
        if (email) {
            await transporter.sendMail({
                from: `"Achtrex Support" <${smtpEmail}>`,
                to: email,
                cc: "info@achtrex.com",
                subject: "We received your inquiry - Achtrex",
                html: userHtml
            });
        }

    } catch (emailError: any) {
        console.error('Email service failed:', emailError);
        // If both DB and Email failed, we should definitely tell the user.
        if (dbErrorOccurred) {
            return { error: `Our systems are currently experiencing issues. DB Error: ${dbErrorMessage}. Email Error: ${emailError.message}` };
        }
        // If only email failed, we still have the lead in the DB, but the user won't get a confirmation.
        return { success: true, warning: `Request received, but we encountered an issue sending the confirmation email. Error: ${emailError.message}` };
    }

    return { success: true };
}

export async function submitPartnerForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const type = formData.get('type') as string;
    const message = formData.get('message') as string;

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    let dbErrorOccurred = false;
    try {
        const fullMessage = `Partnership Type: ${type}\n\nMessage: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, 'Partnership', 'new')
        `;
    } catch (dbError) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
    }

    try {
        const smtpEmail = (process.env.SMTP_USER || 'support@achtrex.com').replace(/['"]/g, '');
        const smtpPassword = (process.env.SMTP_PASS || 'krsg kvyz zlzo bnax').replace(/['"]/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            },
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 10000
        });

        const adminHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333;">
                <h2 style="color: #10b981;">New Partner Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Partnership Type:</strong> ${type || 'N/A'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <h3>About Business:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `;

        // Send to Admin
        await transporter.sendMail({
            from: `"Achtrex Partner System" <${smtpEmail}>`,
            to: smtpEmail,
            subject: `New Partner Application from ${company}`,
            html: adminHtml
        });

        // Send confirmation to User
        const userHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #10b981;">Application Received!</h2>
                <p>Hello ${name},</p>
                <p>Thank you for applying to the Achtrex Partner Program. We are excited about the possibility of collaborating with <strong>${company}</strong>.</p>
                <p>Our partner relations team is reviewing your application and will get back to you within 2 business days.</p>
                <p>Best regards,<br/>The Achtrex Team</p>
            </div>
        `;

        await transporter.sendMail({
            from: `"Achtrex Partner Program" <${smtpEmail}>`,
            to: email,
            subject: "We received your partner application! - Achtrex",
            html: userHtml
        });

    } catch (emailError: any) {
        console.error('Email service failed:', emailError);
        if (dbErrorOccurred) {
            return { error: `Our systems are currently experiencing issues. Please try again later or email us directly at support@achtrex.com.` };
        }
        return { success: true, warning: `Application received, but we encountered an issue sending the confirmation email.` };
    }

    return { success: true };
}
