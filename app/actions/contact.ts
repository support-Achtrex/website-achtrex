'use server';

import { sql } from '@vercel/postgres';
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

    } catch (dbError) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
    }

    // 2. Send Emails via Nodemailer (Gmail/SMTP)
    // This solves the issue of "free tier" restrictions. Gmail allows sending to anyone.
    try {
        const smtpEmail = (process.env.SMTP_USER || 'support@achtrex.com').replace(/['"]/g, '');
        const smtpPassword = (process.env.SMTP_PASS || 'npec ngix uixj jyam').replace(/['"]/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
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
        /* Base Styles */
        body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; }
        table { border-spacing: 0; width: 100%; }
        td { padding: 0; }
        img { border: 0; display: block; max-width: 100%; }
        
        /* Layout */
        .wrapper { width: 100%; table-layout: fixed; background-color: #0a0a0a; padding-bottom: 40px; }
        .main { background-color: #111111; margin: 0 auto; width: 100%; max-width: 600px; border-collapse: collapse; border: 1px solid #222222; }
        
        /* Content */
        .header { padding: 40px 20px; text-align: center; background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%); }
        .hero { padding: 40px 30px; text-align: left; }
        .cyan-text { color: #00FFFF; }
        .btn { background-color: #00FFFF; color: #000000 !important; padding: 15px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; }
        
        /* Services Section */
        .service-card { padding: 20px; border-bottom: 1px solid #222222; }
        .footer { padding: 30px; text-align: center; font-size: 12px; color: #888888; }
        
        h1 { font-size: 28px; margin-bottom: 20px; letter-spacing: -1px; color: #ffffff; }
        p { line-height: 1.6; font-size: 16px; color: #e5e5e5; }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main">
            <tr>
                <td class="header">
                    <!-- Brand Logo -->
                    <img src="https://www.achtrex.com/achtrex-logo-email.png" alt="ACHTREX" width="120" style="margin: 0 auto 20px auto; display: block;">
                    <h1 style="margin:0; font-weight: 800; letter-spacing: 2px; color: #ffffff;">
                        ACH<span class="cyan-text">TREX</span>
                    </h1>
                    <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #aaaaaa;">Future-Forward Digital Studio</p>
                </td>
            </tr>

            <tr>
                <td>
                    <img src="https://www.achtrex.com/email-banner.jpg" alt="Achtrex Team" width="600">
                </td>
            </tr>

            <tr>
                <td class="hero">
                    <h1 style="color: #ffffff;">Thanks for reaching out!</h1>
                    <p style="color: #e5e5e5;">Hello <strong class="cyan-text">${name}</strong>,</p>
                    <p style="color: #e5e5e5;">We’ve received your inquiry regarding <strong>${service || 'a potential collaboration'}</strong> and our team is already reviewing your details. At <span class="cyan-text">Achtrex</span>, we don’t just write code - we architect solutions that propel businesses forward.</p>
                    
                     <div style="background-color: #1a1a1a; border-left: 4px solid #00FFFF; padding: 15px; margin: 25px 0;">
                        <p style="margin: 0; color: #e5e5e5; font-size: 14px;"><strong>Your Message:</strong><br/>
                        <span style="color: #bbbbbb;">${message}</span></p>
                    </div>

                    <p style="color: #e5e5e5;">While we prepare a tailored response for you, here is a quick look at how we help our global partners scale.</p>
                    <br>
                    <a href="https://achtrex.com/portfolio" class="btn">View Our Portfolio</a>
                </td>
            </tr>

            <tr>
                <td style="padding: 0 30px 20px;">
                    <h3 style="color: #00FFFF; border-bottom: 1px solid #00FFFF; padding-bottom: 10px;">Our Expertise</h3>
                </td>
            </tr>

            <tr>
                <td class="service-card">
                    <table width="100%">
                        <tr>
                            <td width="20%"><img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" width="40" style="filter: invert(80%) sepia(100%) saturate(1000%) hue-rotate(140deg);"></td>
                            <td>
                                <strong style="color: #ffffff; font-size: 18px;">Product Engineering</strong>
                                <p style="margin: 5px 0 0; font-size: 14px; color: #aaaaaa;">End-to-end software development transforming complex requirements into scalable solutions.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="service-card">
                    <table width="100%">
                        <tr>
                            <td width="20%"><img src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png" width="40" style="filter: invert(80%) sepia(100%) saturate(1000%) hue-rotate(140deg);"></td>
                            <td>
                                <strong style="color: #ffffff; font-size: 18px;">UI/UX Design</strong>
                                <p style="margin: 5px 0 0; font-size: 14px; color: #aaaaaa;">Crafting immersive user experiences that blend aesthetics with intuitive functionality.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="service-card">
                    <table width="100%">
                        <tr>
                            <td width="20%"><img src="https://cdn-icons-png.flaticon.com/512/2103/2103533.png" width="40" style="filter: invert(80%) sepia(100%) saturate(1000%) hue-rotate(140deg);"></td>
                            <td>
                                <strong style="color: #ffffff; font-size: 18px;">AI & Tech Consulting</strong>
                                <p style="margin: 5px 0 0; font-size: 14px; color: #aaaaaa;">Harnessing AI integration and strategic architecture to modernize your tech stack.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td style="padding: 40px 30px; background-color: #00FFFF; color: #000000; text-align: center;">
                    <h2 style="margin: 0;">Global Impact.</h2>
                    <p style="color: #000000; font-weight: 500;">Serving visionary companies across Ghana, the USA, and beyond.</p>
                </td>
            </tr>

            <tr>
                <td class="footer">
                    <p style="color: #888888;"><strong>Achtrex Studio</strong><br>
                    Accra, Ghana | New Jersey, USA</p>
                    <p>
                        <a href="https://achtrex.com" style="color: #00FFFF; text-decoration: none;">Website</a> | 
                        <a href="https://achtrex.com/blog" style="color: #00FFFF; text-decoration: none;">Blog</a>
                    </p>
                    <p style="color: #888888;">&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
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
            return { error: 'Our systems are currently experiencing issues. Please try again later or email us directly at support@achtrex.com' };
        }
        // If only email failed, we still have the lead in the DB, but the user won't get a confirmation.
        return { success: true, warning: 'Request received, but we encountered an issue sending the confirmation email.' };
    }

    return { success: true };
}
