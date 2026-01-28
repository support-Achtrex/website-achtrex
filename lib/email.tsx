import nodemailer from 'nodemailer';
import { jsPDF } from 'jspdf';

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
}

export async function sendInvoiceEmail(data: InvoiceData) {
    // Credentials are now hardcoded as fallback in transporter setup

    try {
        const pdfBuffer = await generateSimpleInvoicePDF(data);
        const htmlContent = generateEmailHtml(data);

        const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'support@achtrex.com';

        await transporter.sendMail({
            from: `"Achtrex Billing" <${senderEmail}>`,
            to: data.client_email,
            subject: `Invoice #${data.invoice_number} from Achtrex`,
            html: htmlContent,
            attachments: [
                {
                    filename: `Invoice-${data.invoice_number}.pdf`,
                    content: Buffer.from(pdfBuffer),
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
            .ad-section { margin-top: 30px; border-top: 2px dashed #e5e7eb; padding-top: 30px; }
            .ad-title { font-size: 18px; font-weight: bold; color: #111827; margin-bottom: 10px; }
            .button { display: inline-block; background-color: #D97706; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                 <img src="https://www.achtrex.com/images/achtrex-logo.png" alt="Achtrex" style="max-height: 50px; width: auto; margin: 0 auto; display: block;">
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
                        <span class="amount">$${Number(data.amount).toLocaleString()}</span>
                    </div>
                    <div style="text-align: right; margin-top: 10px;">
                        <span class="status">${data.status}</span>
                    </div>
                </div>

                <p>A PDF copy of this invoice is attached to this email.</p>

                <!-- Advertisement Section -->
                <div class="ad-section">
                    <div class="ad-title">Check Out Our Premium Products</div>
                    <p>Upgrade your workflow with Achtrex Pro. Get advanced analytics, unlimited invoicing, and priority support.</p>
                    <div style="display: flex; gap: 10px; margin-top: 15px;">
                         <img src="https://placehold.co/150x80/png?text=Analytics" alt="Analytics" style="border-radius: 4px; display: block;">
                         <img src="https://placehold.co/150x80/png?text=CRM" alt="CRM" style="border-radius: 4px; display: block;">
                    </div>
                    <a href="https://achtrex.com/products" class="button">Explore Products</a>
                </div>
            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;
}

async function generateSimpleInvoicePDF(data: InvoiceData): Promise<ArrayBuffer> {
    // Basic text-only PDF generation
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('INVOICE', 20, 20);

    doc.setFontSize(12);
    doc.text(`Invoice #: ${data.invoice_number}`, 20, 40);
    doc.text(`Date: ${data.date}`, 20, 50);
    doc.text(`Status: ${data.status.toUpperCase()}`, 20, 60);

    doc.line(20, 70, 190, 70);

    doc.text('Bill To:', 20, 85);
    doc.text(`${data.client_name || 'Client'}`, 20, 95);
    doc.text(`${data.client_email}`, 20, 105);

    doc.text('Description', 20, 130);
    doc.text('Amount', 150, 130);

    doc.line(20, 135, 190, 135);

    doc.text(data.description, 20, 145);
    doc.text(`$${Number(data.amount).toLocaleString()}`, 150, 145);

    doc.line(20, 155, 190, 155);

    doc.setFontSize(16);
    doc.text(`Total: $${Number(data.amount).toLocaleString()}`, 120, 170);

    doc.setFontSize(10);
    doc.text('Thank you for your business!', 20, 200);
    doc.text('Achtrex', 20, 205);

    return doc.output('arraybuffer');
}
