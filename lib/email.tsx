import 'server-only';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import React from 'react';
import { InvoiceTemplate } from '@/components/invoice/InvoiceTemplate';
import { InvoicePDF } from '@/components/invoice/InvoicePDF';
import { renderToBuffer } from '@react-pdf/renderer';

// Setup Transporter
// using credentials found in marketing.ts
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER || 'support@achtrex.com',
        pass: process.env.SMTP_PASS || 'iygw lvjk zagq dcwr',
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

export async function generateInvoicePDF(data: InvoiceData): Promise<Buffer> {
    try {
        console.log("PDF Generation: Starting browserless generation for invoice", data.invoice_number);

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
            <InvoicePDF payment={payment} client={client} logoSrc={logoBase64} />
        );

        return buffer as Buffer;

    } catch (error: any) {
        console.error("PDF generation failed:", error);
        throw new Error(`PDF generation failed: ${error.message}`);
    }
}
