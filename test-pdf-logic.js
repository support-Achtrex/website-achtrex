
const { generateInvoicePDF } = require('./lib/email');
const fs = require('fs');

async function testGeneration() {
    console.log("Starting PDF generation test...");
    const testData = {
        invoice_number: "TEST-12345",
        amount: 500.00,
        description: "Test PDF Generation Services",
        status: "pending",
        date: "January 28, 2026",
        client_name: "Test Client",
        client_email: "test@example.com",
        currency: "USD"
    };

    try {
        const buffer = await generateInvoicePDF(testData);
        console.log("PDF generated successfully!");
        console.log("Buffer size:", buffer.length);

        fs.writeFileSync('test-invoice.pdf', buffer);
        console.log("Saved to test-invoice.pdf");
        process.exit(0);
    } catch (e) {
        console.error("PDF test failed:", e);
        process.exit(1);
    }
}

testGeneration();
