
import { sendInvoiceEmail } from '../lib/email';

async function main() {
    console.log("Testing email sending...");
    try {
        await sendInvoiceEmail({
            invoice_number: 'TEST-001',
            amount: 100,
            description: 'Test Invoice',
            status: 'pending',
            date: new Date().toLocaleDateString(),
            client_name: 'Test Client',
            client_email: 'support@achtrex.com' // Sending to self/known valid email? Or just random.
        });
        console.log("Email function executed.");
    } catch (e) {
        console.error("Test script failed:", e);
    }
}

main();
