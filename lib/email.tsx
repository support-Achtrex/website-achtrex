import 'server-only';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import React from 'react';
import { InvoiceTemplate } from '@/components/invoice/InvoiceTemplate';
import { InvoicePDF } from '@/components/invoice/InvoicePDF';
import { ProjectReport } from '@/components/invoice/ProjectReport';
import { renderToBuffer } from '@react-pdf/renderer';

// Setup Transporter
// using credentials found in marketing.ts
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER || 'support@achtrex.com',
        pass: process.env.SMTP_PASS || 'npec ngix uixj jyam',
    },
});

interface InvoiceData {
    invoice_number: string;
    amount: string | number;
    description: string;
    status: string;
    date: string;
    client_name?: string;
    client_email: string;
    currency?: string;
}

export async function sendInvoiceEmail(data: InvoiceData) {
    // Credentials are now hardcoded as fallback in transporter setup

    try {
        const pdfBuffer = await generateInvoicePDF(data);
        const htmlContent = generateEmailHtml(data);
        const textContent = generatePlainText(data);

        const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'support@achtrex.com';

        await transporter.sendMail({
            from: `"Achtrex Billing" <${senderEmail}>`,
            to: data.client_email,
            subject: `Invoice #${data.invoice_number} from Achtrex`,
            text: textContent, // Plain text fallback reduces spam score
            html: htmlContent,
            attachments: [
                {
                    filename: `Invoice-${data.invoice_number}.pdf`,
                    content: pdfBuffer, // Buffer matches expectation
                    contentType: 'application/pdf',
                },
            ],
        });
        console.log(`Invoice email sent to ${data.client_email}`);
    } catch (error) {
        console.error('Error sending invoice email:', error);
        throw error;
    }
}

function generatePlainText(data: InvoiceData) {
    return `
    ACHTREX INVOICE
    
    Hello ${data.client_name || 'Valued Client'},
    
    Here is the invoice for your recent transaction.
    
    Invoice #: ${data.invoice_number}
    Date: ${data.date}
    Description: ${data.description}
    Total Amount: ${Number(data.amount).toLocaleString('en-US', { style: 'currency', currency: data.currency || 'USD' })}
    Status: ${data.status.toUpperCase()}
    
    A PDF copy of this invoice is attached to this email.
    
    Thank you for your business!
    
    Achtrex
    support@achtrex.com
    `;
}

function generateEmailHtml(data: InvoiceData) {
    const statusColor = data.status.toLowerCase() === 'paid' ? '#10B981' : '#F59E0B';

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { background-color: #111827; padding: 40px; text-align: center; }
            .content { padding: 40px; color: #374151; line-height: 1.6; }
            .invoice-box { background-color: #f3f4f6; border-radius: 6px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb; }
            .amount { font-size: 24px; font-weight: bold; color: #111827; }
            .status { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; color: white; background-color: ${statusColor}; text-transform: uppercase; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }

        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                 <h1 style="color: white; margin: 0;">Achtrex</h1>
            </div>
            <div class="content">
                <h2>Invoice Details</h2>
                <p>Hello ${data.client_name || 'Valued Client'},</p>
                <p>Here is the invoice for your recent transaction.</p>
                
                <div class="invoice-box">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span>Invoice #</span>
                        <strong>${data.invoice_number}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span>Date</span>
                        <strong>${data.date}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span>Description</span>
                        <strong>${data.description}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; border-top: 1px solid #d1d5db; padding-top: 10px;">
                        <span>Total Amount</span>
                        <span class="amount">${Number(data.amount).toLocaleString('en-US', { style: 'currency', currency: data.currency || 'USD' })}</span>
                    </div>
                    <div style="text-align: right; margin-top: 10px;">
                        <span class="status">${data.status}</span>
                    </div>
                </div>

                <p>A PDF copy of this invoice is attached to this email.</p>


            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;
}

export async function generateInvoicePDF(data: InvoiceData, title: string = 'Invoice'): Promise<Buffer> {
    try {
        console.log("PDF Generation: Starting browserless generation for", title, data.invoice_number);

        // Read Logo
        const logoPath = path.join(process.cwd(), 'public', 'images', 'achtrex-logo.png');
        let logoBase64 = '';
        try {
            const logoBuffer = fs.readFileSync(logoPath);
            logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        } catch (e) {
            console.error("Error reading logo for PDF:", e);
        }

        const payment = {
            invoice_number: data.invoice_number,
            created_at: data.date,
            status: data.status,
            description: data.description,
            amount: data.amount,
            currency: data.currency
        };

        const client = {
            name: data.client_name,
            email: data.client_email,
            company: ''
        };

        const buffer = await renderToBuffer(
            <InvoicePDF payment={payment} client={client} logoSrc={logoBase64} documentTitle={title} />
        );

        return buffer as Buffer;

    } catch (error: any) {
        console.error("PDF generation failed:", error);
        throw new Error(`PDF generation failed: ${error.message}`);
    }
}

export async function generateProjectReportPDF(subscriber: any, notes: any[], milestones: any[], reportType: string = "Weekly Progress Report"): Promise<Buffer> {
    try {
        const logoPath = path.join(process.cwd(), 'public', 'images', 'achtrex-logo.png');
        let logoBase64 = '';
        try {
            const logoBuffer = fs.readFileSync(logoPath);
            logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        } catch (e) {
            console.error("Error reading logo for Report:", e);
        }

        const buffer = await renderToBuffer(
            <ProjectReport
                subscriber={subscriber}
                notes={notes}
                milestones={milestones}
                logoSrc={logoBase64}
                reportType={reportType}
            />
        );

        return buffer as Buffer;
    } catch (error: any) {
        console.error("Report PDF generation failed:", error);
        throw new Error(`Report PDF generation failed: ${error.message}`);
    }
}

export async function sendWeeklyReportEmail(subscriber: any, notes: any[], milestones: any[]) {
    try {
        const pdfBuffer = await generateProjectReportPDF(subscriber, notes, milestones, "Weekly Progress Report");

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const weeklyNotes = notes.filter(n => new Date(n.created_at) >= oneWeekAgo);

        const completedCount = milestones.filter(m => m.status === 'completed').length;
        const progressPercent = milestones.length > 0 ? Math.round((completedCount / milestones.length) * 100) : 0;

        const html = `
            <!DOCTYPE html>
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #111827;">Project Weekly Update</h2>
                    <p>Hello ${subscriber.name || 'Valued Client'},</p>
                    <p>Here is your weekly progress report for the project. Our team has been working hard to keep things on track.</p>
                    
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #8b5cf6;">Status Overview</h3>
                        <p style="font-size: 24px; font-weight: bold; margin: 5px 0;">${progressPercent}% Complete</p>
                        <div style="width: 100%; height: 8px; background: #e5e7eb; border-radius: 4px;">
                            <div style="width: ${progressPercent}%; height: 100%; background: #8b5cf6; border-radius: 4px;"></div>
                        </div>
                    </div>

                    <h3 style="border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Updates from This Week</h3>
                    ${weeklyNotes.length > 0 ? `
                        <ul style="padding-left: 20px;">
                            ${weeklyNotes.map(n => `<li style="margin-bottom: 10px;">${n.content}</li>`).join('')}
                        </ul>
                    ` : '<p style="color: #999; font-style: italic;">No specific updates logged this week. We are continuing work on the current milestones.</p>'}

                    <p style="margin-top: 30px;">A detailed PDF report is attached to this email for your records.</p>
                    
                    <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #666; text-align: center;">
                        &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.<br>
                        "Transforming Ideas into Digital Reality"
                    </div>
                </div>
            </body>
            </html>
        `;

        const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'support@achtrex.com';

        await transporter.sendMail({
            from: `"Achtrex Project Updates" <${senderEmail}>`,
            to: subscriber.email,
            subject: `Weekly Progress Report - ${new Date().toLocaleDateString()}`,
            html: html,
            attachments: [
                {
                    filename: `Project-Report-${new Date().toISOString().split('T')[0]}.pdf`,
                    content: pdfBuffer,
                    contentType: 'application/pdf',
                },
            ],
        });

        console.log(`Weekly report sent to ${subscriber.email}`);
    } catch (error) {
        console.error('Error sending weekly report:', error);
        throw error;
    }
}

export async function sendPayslipEmail(member: any, payroll: any) {
    try {
        const formattedDate = new Date(payroll.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        const pdfData = {
            invoice_number: `PAY-${payroll.id.toString().padStart(6, '0')}`,
            amount: payroll.amount,
            description: `Salary Payment for ${formattedDate}`,
            status: 'paid',
            date: new Date(payroll.date).toLocaleDateString(),
            client_name: member.name,
            client_email: member.email,
            currency: 'USD'
        };

        // Generate PDF with "Payslip" title
        const pdfBuffer = await generateInvoicePDF(pdfData, 'Payslip');

        // Enhanced HTML Template
        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Payslip Notification</title>
                    <style>
                        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; color: #111827; }
                        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; }
                        .header { background: #111827; padding: 32px; text-align: center; }
                        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
                        .content { padding: 40px 32px; }
                        .greeting { font-size: 18px; margin-bottom: 24px; }
                        .card { background-color: #f3f4f6; border-radius: 8px; padding: 24px; margin: 24px 0; border: 1px solid #e5e7eb; }
                        .amount-label { font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
                        .amount-value { font-size: 32px; font-weight: 800; color: #10b981; margin-top: 4px; }
                        .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
                        .detail-row:last-child { border-bottom: none; }
                        .detail-label { color: #6b7280; font-size: 14px; }
                        .detail-value { font-weight: 500; font-size: 14px; }
                        .footer { background-color: #f9fafb; padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Achtrex HR</h1>
                        </div>
                        <div class="content">
                            <p class="greeting">Hello ${member.name},</p>
                            <p>We are pleased to inform you that your payslip for <strong>${formattedDate}</strong> has been generated and payment has been processed.</p>
                            
                            <div class="card">
                                <div style="text-align: center; margin-bottom: 24px;">
                                    <div class="amount-label">Net Pay Amount</div>
                                    <div class="amount-value">$${Number(payroll.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Employee ID</span>
                                    <span class="detail-value">${member.id.toString().padStart(4, '0')}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Payment Date</span>
                                    <span class="detail-value">${new Date(payroll.date).toLocaleDateString()}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Status</span>
                                    <span class="detail-value" style="color: #10b981; font-weight: bold;">PAID</span>
                                </div>
                            </div>

                            <p>Please find your detailed payslip attached to this email as a PDF document.</p>
                            <p>If you have any questions regarding this payment, please contact the HR department.</p>
                        </div>
                        <div class="footer">
                            &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.<br>
                            This is an automated message, please do not reply directly.
                        </div>
                    </div>
                </body>
            </html>
        `;

        const senderEmail = process.env.SMTP_USER || 'support@achtrex.com';

        await transporter.sendMail({
            from: `"Achtrex HR" <${senderEmail}>`,
            to: member.email,
            subject: `Payslip Available: ${formattedDate}`,
            html: html,
            attachments: [
                {
                    filename: `Payslip-${formattedDate.replace(/ /g, '-')}.pdf`,
                    content: pdfBuffer,
                    contentType: 'application/pdf',
                },
            ],
        });

        console.log(`Payslip sent to ${member.email}`);
        return { success: true };

    } catch (error) {
        console.error('Error sending payslip:', error);
        throw error;
    }
}
