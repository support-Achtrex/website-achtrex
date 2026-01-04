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

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    // 1. Save to Database (Resilient)
    // We attempt this first. If it fails, we log it but proceed to email so at least we get a notification.
    try {
        const fullMessage = `Service: ${service} \nPhone: ${phone} \n\nMessage: ${message} `;
        await sql`
            INSERT INTO leads(name, email, company, message, status)
VALUES(${name}, ${email}, ${company}, ${fullMessage}, 'new')
    `;
    } catch (dbError) {
        console.error('Database insertion warning (proceeding to email):', dbError);
    }

    // 2. Send Emails via Nodemailer (Gmail/SMTP)
    // This solves the issue of "free tier" restrictions. Gmail allows sending to anyone.
    try {
        const smtpEmail = process.env.SMTP_EMAIL;
        const smtpPassword = process.env.SMTP_PASSWORD;

        if (!smtpEmail || !smtpPassword) {
            console.warn("⚠️ SMTP credentials missing. Skipping email. Set SMTP_EMAIL and SMTP_PASSWORD in .env");
            return { success: true }; // Return success to UI even if server config is missing
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword // App Password, not login password
            }
        });

        // Email Templates
        const adminHtml = `
    < div style = "font-family: system-ui, sans-serif; color: #333;" >
        <h2 style="color: #0ea5e9;" > New Project Inquiry </h2>
            < p > <strong>Name: </strong> ${name}</p >
                <p><strong>Email: </strong> <a href="mailto:${email}">${email}</a > </p>
                    < p > <strong>Phone: </strong> ${phone || 'N/A'}</p>
                        < p > <strong>Company: </strong> ${company || 'N/A'}</p>
                            < p > <strong>Service: </strong> ${service || 'N/A'}</p>
                                < hr style = "border: 1px solid #eee; margin: 20px 0;" />
                                    <h3>Message: </h3>
                                        < p style = "white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;" > ${message} </p>
                                            </div>
                                                `;

        const userHtml = `
                                            < div style = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;" >
                                                <div style="background-color: #0f172a; padding: 30px 20px; text-align: center;" >
                                                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;" > ACHTREX </h1>
                                                        < p style = "color: #0ea5e9; margin: 5px 0 0; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;" > Digital Transformation Partners </p>
                                                            </div>
                                                            < div style = "padding: 40px 30px;" >
                                                                <h2 style="color: #1e293b; margin-top: 0;" > Hi ${name}, </h2>
                                                                    < p style = "color: #475569; line-height: 1.6;" > Thank you for contacting < strong > Achtrex < /strong>. We have received your inquiry regarding <strong>${service || 'your project'}</strong >.</p>
                                                                        < p style = "color: #475569; line-height: 1.6;" > Our team involves top 1 % talent dedicated to turning complex challenges into revenue - generating digital assets.We are reviewing your details and will get back to you shortly(usually within 24 hours).</p>
                                                                            < div style = "background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 15px; margin: 25px 0;" >
                                                                                <p style="margin: 0; color: #334155; font-size: 14px;" > <strong>Your Submission: </strong><br/ >
                                                                                    <span style="color: #64748b;" > ${message} </span></p >
                                                                                        </div>
                                                                                        < p style = "color: #475569; line-height: 1.6;" > In the meantime, feel free to browse our portfolio details.</p>
                                                                                            < p style = "color: #475569; margin-top: 30px;" > Best regards, <br/><strong>Achtrex Support Team</strong > </p>
                                                                                                </div>
                                                                                                < div style = "background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;" >
                                                                                                    <p style="margin: 0;" >& copy; ${new Date().getFullYear()} Achtrex.All rights reserved.</p>
                                                                                                        < a href = "https://achtrex.com" style = "color: #0ea5e9; text-decoration: none;" > www.achtrex.com </a>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                                `;

        // Send Admin Notification
        await transporter.sendMail({
            from: `"Achtrex Website" < ${smtpEmail}> `,
            to: "support@achtrex.com, info@achtrex.com",
            subject: `New Lead: ${name} (${company || 'No Company'})`,
            html: adminHtml,
            replyTo: email
        });

        // Send User Welcome Email
        // With Gmail, this will successfully land in the user's inbox
        if (email) {
            await transporter.sendMail({
                from: `"Achtrex Support" < ${smtpEmail}> `,
                to: email,
                cc: "info@achtrex.com",
                subject: "We received your inquiry - Achtrex",
                html: userHtml
            });
        }

    } catch (emailError: any) {
        console.error('Email service failed:', emailError);
        // We log the error but do not fail the request to the user.
        // It's better for them to think it succeeded than to see a scary error.
    }

    return { success: true };
}
