'use server';

import nodemailer from 'nodemailer';
import { sql } from '@/lib/db';

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

    // 2. Send Email via Nodemailer
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

        await transporter.sendMail({
            from: `"Achtrex Lead Gen" <${smtpEmail}>`,
            to: 'support@achtrex.com',
            subject: `New Lead: ${name} (${company || 'No Company'})`,
            html: adminHtml,
            replyTo: email
        });

        const customerHtml = `
            <div style="font-family: 'Inter', Helvetica, sans-serif; background-color: #070b14; color: #ffffff; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="https://achtrex.com/achtrex-logo-email.png" alt="Achtrex Logo" style="max-height: 40px; margin-bottom: 20px;" />
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank you for reaching out!</h1>
                    <p style="color: #a0aec0; font-size: 16px; margin-top: 10px;">Hi ${name.split(' ')[0]}, we have received your request and our team will be in touch shortly.</p>
                </div>
                
                <div style="background-color: #111112; border: 1px solid #2d3748; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                    <h2 style="color: #c2fce3; font-size: 20px; margin-top: 0;">While you wait...</h2>
                    <p style="color: #e2e8f0; line-height: 1.6;">Explore some of the powerful platforms driving innovation at Achtrex:</p>
                    
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
            subject: `Thank you for contacting Achtrex, ${name.split(' ')[0]}!`,
            html: customerHtml
        });

        if (dbErrorOccurred) {
            return { success: true, warning: `Lead received, but failed to save to database: ${dbErrorMessage}` };
        }

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        if (dbErrorOccurred) {
            return { error: `Failed to send inquiry and failed to save to database. DB Error: ${dbErrorMessage}. Email Error: ${error.message}` };
        }
        return { error: `Database saved successfully, but failed to send email. Error: ${error.message}` };
    }
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
    let dbErrorMessage = '';
    try {
        const fullMessage = `Partnership Type: ${type}\n\nMessage: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, 'Partnership', 'new')
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

        await transporter.sendMail({
            from: `"Achtrex Partner Gen" <${smtpEmail}>`,
            to: 'support@achtrex.com',
            subject: `New Partner Application from ${company}`,
            html: adminHtml,
            replyTo: email
        });

        const customerHtml = `
            <div style="font-family: 'Inter', Helvetica, sans-serif; background-color: #070b14; color: #ffffff; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="https://achtrex.com/achtrex-logo-email.png" alt="Achtrex Logo" style="max-height: 40px; margin-bottom: 20px;" />
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Partnership Request Received</h1>
                    <p style="color: #a0aec0; font-size: 16px; margin-top: 10px;">Hi ${name.split(' ')[0]}, thank you for your interest in partnering with Achtrex. Our team will review your application and be in touch soon.</p>
                </div>
                
                <div style="background-color: #111112; border: 1px solid #2d3748; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                    <h2 style="color: #c2fce3; font-size: 20px; margin-top: 0;">While you wait...</h2>
                    <p style="color: #e2e8f0; line-height: 1.6;">Explore the powerful platforms we can build together:</p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2d3748; display: flex; align-items: start; gap: 15px;">
                        <img src="https://achtrex.com/projects/ad-logo.png" alt="AutomotiveDataset Logo" style="width: 40px; height: 40px; object-fit: contain; border-radius: 8px;" />
                        <div>
                            <h3 style="color: #60a5fa; margin: 0 0 5px 0;">AutomotiveDataset.com</h3>
                            <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 10px 0;">Integrate the world's most comprehensive vehicle specification and market data API into your ecosystem.</p>
                            <a href="https://automotivedataset.com" style="color: #60a5fa; text-decoration: none; font-weight: bold; font-size: 14px;">Explore Dataset &rarr;</a>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2d3748; display: flex; align-items: start; gap: 15px;">
                        <img src="https://achtrex.com/logos/lumi-logo.png" alt="LUMI AI Logo" style="width: 40px; height: 40px; object-fit: contain; border-radius: 8px;" />
                        <div>
                            <h3 style="color: #c084fc; margin: 0 0 5px 0;">✨ LUMI AI</h3>
                            <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 10px 0;">Leverage cognitive automotive reasoning to unlock predictive insights and automate workflows.</p>
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
            from: `"Achtrex Partnerships" <${smtpEmail}>`,
            to: email,
            subject: `We've received your partnership request, ${name.split(' ')[0]}`,
            html: customerHtml
        });

        if (dbErrorOccurred) {
            return { success: true, warning: `Application received, but failed to save to database: ${dbErrorMessage}` };
        }

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        if (dbErrorOccurred) {
            return { error: `Failed to send application and failed to save to database. DB Error: ${dbErrorMessage}. Email Error: ${error.message}` };
        }
        return { error: `Application saved to DB, but failed to send email. Error: ${error.message}` };
    }
}
