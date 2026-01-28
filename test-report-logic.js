
const { generateProjectReportPDF } = require('./lib/email');
const fs = require('fs');

async function testReport() {
    console.log("Starting Project Report PDF generation test...");

    const mockSubscriber = {
        name: "Achim Achtrex",
        email: "achim@achtrex.com",
        company: "Achtrex Solutions"
    };

    const mockNotes = [
        { content: "Completed the homepage UI design.", created_at: new Date().toISOString() },
        { content: "Started working on the database migration.", created_at: new Date(Date.now() - 86400000).toISOString() },
        { content: "Last week note", created_at: new Date(Date.now() - 800000000).toISOString() }
    ];

    const mockMilestones = [
        { milestone: "Initial Consultation", status: "completed" },
        { milestone: "UI/UX Design", status: "completed" },
        { milestone: "Development Phase", status: "pending" },
        { milestone: "Final QA", status: "pending" }
    ];

    try {
        const buffer = await generateProjectReportPDF(mockSubscriber, mockNotes, mockMilestones, "Weekly Progress Report");
        console.log("Report PDF generated successfully!");
        console.log("Buffer size:", buffer.length);

        fs.writeFileSync('test-report.pdf', buffer);
        console.log("Saved to test-report.pdf");
        process.exit(0);
    } catch (e) {
        console.error("Report test failed:", e);
        process.exit(1);
    }
}

testReport();
