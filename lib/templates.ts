
export interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    html: string;
}

const COMMON_STYLES = `
    /* Base Reset */
    body { font-family: system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6; color: #334155; margin: 0; padding: 0; background-color: #f1f5f9; }
    
    /* Layout */
    .wrapper { width: 100%; table-layout: fixed; background-color: #f1f5f9; padding-bottom: 40px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
    
    /* Header */
    .header { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 40px; text-align: center; }
    
    /* Content */
    .content { padding: 40px; background-color: #ffffff; }
    .content h2 { color: #0f172a; font-size: 22px; font-weight: 700; margin-bottom: 20px; margin-top: 0; line-height: 1.3; }
    .content p { margin-bottom: 20px; color: #334155; font-size: 16px; }
    .content strong { color: #0f172a; font-weight: 600; }
    
    /* Buttons */
    .button-container { text-align: center; margin: 35px 0; }
    .button { 
        background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); 
        color: #ffffff !important; 
        padding: 14px 28px; 
        border-radius: 6px; 
        text-decoration: none; 
        font-weight: 600; 
        font-size: 16px; 
        display: inline-block; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    /* Footer */
    .footer { background-color: #f8fafc; padding: 30px 40px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .footer a { color: #3b82f6; text-decoration: none; }
    
    /* Utilities */
    .divider { height: 1px; background-color: #e2e8f0; margin: 30px 0; border: none; }
    .text-center { text-align: center; }
    .text-small { font-size: 14px; }
    .highlight-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 24px; border-radius: 8px; margin: 24px 0; }
    
    /* Grid System for Email */
    .grid-2 { display: table; width: 100%; border-spacing: 15px 0; border-collapse: separate; table-layout: fixed; }
    .col-2 { display: table-cell; width: 50%; vertical-align: top; }
`;

// Helper to wrap content in main layout
const wrapTemplate = (content: string, title: string = 'Achtrex') => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>${COMMON_STYLES}</style>
</head>
<body>
    <div class="wrapper">
        <center>
            <div class="container">
                <div class="header">
                    <img src="https://www.achtrex.com/achtrex-logo-email.png" alt="ACHTREX" width="140" style="margin: 0 auto 10px auto; display: block;">
                    <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.9); margin: 0; font-weight: 600;">Enterprise Data & AI Platforms</p>
                </div>
                <div class="content">
                    ${content}
                </div>
                <div class="footer">
                    <p style="margin-bottom: 10px;">
                        <a href="https://achtrex.com">Website</a> • 
                        <a href="https://achtrex.com/blog">Blog</a> • 
                        <a href="https://achtrex.com/contact-us">Contact</a>
                    </p>
                    <p>
                        &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.<br>
                        Building the Digital Future.
                    </p>
                    <p style="margin-top: 20px; font-size: 11px;">
                        You received this because you are subscribed to our updates.<br>
                        <a href="https://achtrex.com/contact-us" style="color:#64748b; text-decoration: underline;">Unsubscribe</a>
                    </p>
                </div>
            </div>
        </center>
    </div>
</body>
</html>
`;

export const EMAIL_TEMPLATES: EmailTemplate[] = [
    {
        id: 'welcome_series_1',
        name: 'Welcome to Achtrex 🚀',
        subject: 'Welcome to Achtrex - Let’s Build Your Data & AI Foundation',
        html: wrapTemplate(`
            <h2>We're thrilled to have you!</h2>
            <p>Hello! Thank you for choosing Achtrex as your technology partner. We are committed to transforming your business with high-performance Data and AI platforms.</p>
            <p>Our team is already preparing to dive into your requirements. We focus on three core pillars to ensure your success:</p>
            
            <div class="grid-2">
                <div class="col-2" style="background: #f8fafc; border-radius: 8px; padding: 20px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" width="40" style="margin-bottom: 10px; opacity: 0.8;">
                    <h4 style="margin:0 0 5px 0; color:#0f172a;">Data Engineering</h4>
                    <p style="margin:0; font-size:13px; line-height:1.4;">Scalable pipelines and real-time processing architectures.</p>
                </div>
                <div class="col-2" style="background: #f8fafc; border-radius: 8px; padding: 20px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/2103/2103533.png" width="40" style="margin-bottom: 10px; opacity: 0.8;">
                    <h4 style="margin:0 0 5px 0; color:#0f172a;">Enterprise AI</h4>
                    <p style="margin:0; font-size:13px; line-height:1.4;">Custom AI models and autonomous agents like LUMI.</p>
                </div>
            </div>

            <p style="margin-top: 25px;">Next steps: You will receive an invitation to our project management board shortly where we will track every milestone together.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/login" class="button">Access Client Portal</a>
            </div>
            
            <p style="text-align: center; color: #64748b; font-style: italic;">Welcome to the future of digital excellence.</p>
        `, "Welcome to Achtrex")
    },
    {
        id: 'weekly_update',
        name: 'Weekly Progress 📈',
        subject: 'Weekly Progress Report - Your Platform Status',
        html: wrapTemplate(`
            <h2>Things are moving fast!</h2>
            <p>We've made significant progress on your platform this week. Our engineers have been working hard to hit our recent milestones.</p>
            
            <div class="highlight-box" style="text-align: center;">
                <div style="font-size: 48px; font-weight: 800; color: #10b981; line-height: 1;">65%</div>
                <div style="text-transform: uppercase; font-size: 12px; font-weight: 700; color: #3b82f6; letter-spacing: 1px; margin-top: 5px;">Overall Completion</div>
                <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 99px; margin-top: 20px; overflow: hidden;">
                    <div style="width: 65%; height: 100%; background: linear-gradient(to right, #10b981, #3b82f6);"></div>
                </div>
            </div>

            <h3>Key Achievements This Week:</h3>
            <ul style="padding-left: 20px; color: #334155;">
                <li style="margin-bottom: 10px;"><strong>Data Pipeline:</strong> Completed the integration of real-time event streaming.</li>
                <li style="margin-bottom: 10px;"><strong>LUMI Integration:</strong> Successfully trained the initial model on your domain data.</li>
                <li style="margin-bottom: 10px;"><strong>Security:</strong> Implemented Zero-Trust authentication protocols.</li>
            </ul>

            <div class="button-container">
                <a href="https://achtrex.com/about-us" class="button">View Detailed Roadmap</a>
            </div>
        `, "Progress Update")
    },
    {
        id: 'lumi_launch',
        name: 'LUMI AI Platform Launch 🤖',
        subject: 'Introducing LUMI: The Autonomous AI Agent Platform',
        html: wrapTemplate(`
            <h2>Automate with LUMI Intelligence</h2>
            <p>We are excited to announce the launch of <strong>LUMI</strong>, our proprietary AI agent platform designed to automate complex enterprise workflows.</p>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 24px; border-radius: 8px; margin: 24px 0;">
                <h4 style="color: #0f172a; margin: 0 0 10px 0; font-size: 18px;">What LUMI Can Do for You:</h4>
                <ul style="color: #334155; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Autonomous Operations:</strong> Handles data entry and processing without intervention.</li>
                    <li style="margin-bottom: 5px;"><strong>Predictive Analytics:</strong> Forecasts trends based on your historical data.</li>
                    <li style="margin-bottom: 5px;"><strong>24/7 Availability:</strong> Operates continuously to ensure zero downtime.</li>
                </ul>
            </div>

            <p>As an existing partner, you get early access to integrate LUMI into your current platform with full support from our engineering team.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/products/lumi" class="button">Explore LUMI Now</a>
            </div>
        `, "Product Launch")
    },
    {
        id: 'security_notice',
        name: 'Security Advisory 🔒',
        subject: 'Zero-Trust Security Framework Update',
        html: wrapTemplate(`
            <h2>Hardening Your Infrastructure</h2>
            <p>At Achtrex, security is not an afterthought. We are rolling out updates to our Zero-Trust Security Framework to ensure your data remains protected against emerging threats.</p>
            
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <strong style="display: block; color: #dc2626; margin-bottom: 5px;">What's Changing:</strong>
                <p style="margin: 0; font-size: 14px; color: #991b1b;">We are implementing stricter mutual TLS (mTLS) requirements for all API communications and upgrading our edge firewalls.</p>
            </div>
            
            <p>No action is required on your part. Our team will handle the migration during off-peak hours to ensure zero impact on your operations.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/about-us" class="button">Read Security Whitepaper</a>
            </div>
        `, "Security Update")
    },
    {
        id: 'newsletter_trends',
        name: 'Newsletter: AI Trends 📰',
        subject: 'The State of Enterprise AI in 2026',
        html: wrapTemplate(`
            <h2>The Future of Data & AI</h2>
            <p>The digital landscape is shifting rapidly. Here are the top 3 trends we are tracking this quarter in the enterprise AI space:</p>
            
            <div style="margin: 30px 0;">
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #10b981; margin: 0 0 5px 0;">1. Agentic AI Workflows</h3>
                    <p style="margin: 0; font-size: 14px;">Moving from simple chat interfaces to autonomous agents that can execute complex tasks.</p>
                </div>
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #10b981; margin: 0 0 5px 0;">2. Edge Data Processing</h3>
                    <p style="margin: 0; font-size: 14px;">Processing data closer to the source to reduce latency and improve privacy.</p>
                </div>
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #10b981; margin: 0 0 5px 0;">3. Verifiable AI</h3>
                    <p style="margin: 0; font-size: 14px;">Ensuring AI outputs are explainable, traceable, and free from bias.</p>
                </div>
            </div>
            
            <p>Want to see how these apply to your business?</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/blog" class="button">Read Full Article</a>
            </div>
        `, "Tech Trends")
    },
    {
        id: 'api_gateway_update',
        name: 'API Gateway Update 🌐',
        subject: 'New Features in Achtrex Global API Gateway',
        html: wrapTemplate(`
            <h2>Faster, Safer API Management</h2>
            <p>We are rolling out significant upgrades to the Achtrex Global API Gateway to improve performance and security for your services.</p>
            
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h4 style="color: #15803d; margin: 0 0 5px 0;">What's New:</h4>
                <ul style="color: #166534; padding-left: 20px; margin: 0;">
                    <li><strong>Global Edge Caching:</strong> Reduces latency by serving static responses from the nearest edge node.</li>
                    <li><strong>AI Rate Limiting:</strong> Automatically detects and blocks malicious traffic patterns.</li>
                </ul>
            </div>
            
            <p>These updates will be applied automatically. No code changes are required on your part.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/products" class="button">View Gateway Docs</a>
            </div>
        `, "API Gateway")
    },
    {
        id: 'data_governance',
        name: 'Data Governance 📊',
        subject: 'Mastering Data Governance with Achtrex',
        html: wrapTemplate(`
            <h2>Ensure Compliance and Quality</h2>
            <p>Managing data at scale requires strict governance. Achtrex provides the tools you need to ensure your data is compliant, secure, and high-quality.</p>
            
            <div style="border-left: 4px solid #10b981; padding: 16px 24px; background: #f8fafc; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <p style="margin:0; font-style: italic; color: #334155;">"Good data governance isn't about restriction; it's about enablement."</p>
            </div>

            <p>Our platform now includes automated data lineage tracking and PII masking out of the box.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/services" class="button">Learn More</a>
            </div>
        `, "Data Governance")
    },
    {
        id: 'ai_finetuning',
        name: 'AI Fine-Tuning 🎯',
        subject: 'Custom AI Model Fine-Tuning for Your Business',
        html: wrapTemplate(`
            <h2>Your Data, Your Model</h2>
            <p>Generic AI models only get you so far. With Achtrex, you can fine-tune state-of-the-art models on your own proprietary data securely.</p>
            
            <p>Our infrastructure is optimized for large-scale training workloads, ensuring fast turnaround times and maximum accuracy.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/services/ai-training" class="button">Schedule Consultation</a>
            </div>
        `, "AI Fine-Tuning")
    },
    {
        id: 'cloud_migration',
        name: 'Cloud Migration ☁️',
        subject: 'Migrate Your Legacy Data to the Cloud Effortlessly',
        html: wrapTemplate(`
            <h2>Seamless Data Migration</h2>
            <p>Are legacy systems holding you back? Achtrex specializes in migrating complex, large-scale datasets to modern cloud architectures with zero downtime.</p>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0; font-size: 14px; color: #334155;">We handles everything from schema mapping to data validation, ensuring a smooth transition.</p>
            </div>
            
            <div class="button-container">
                <a href="https://achtrex.com/services/migration" class="button">Get Migration Quote</a>
            </div>
        `, "Cloud Migration")
    },
    {
        id: 'realtime_analytics',
        name: 'Real-Time Analytics ⏱️',
        subject: 'New Feature: Real-Time Analytics Dashboard',
        html: wrapTemplate(`
            <h2>Decision Making at the Speed of Data</h2>
            <p>Stop waiting for batch processing. Our new Real-Time Analytics Dashboard gives you instant visibility into your operations as they happen.</p>
            
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" style="width: 100%; border-radius: 8px; margin: 20px 0; display: block;" alt="Analytics Dashboard">
            
            <p>Monitor API latency, active user sessions, and database throughput in real-time with zero performance overhead.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/dashboard" class="button">Try Live Demo</a>
            </div>
        `, "Analytics Update")
    },
    {
        id: 'webinar_data_eng',
        name: 'Webinar Invitation 🎥',
        subject: 'Webinar: Scaling Data Pipelines for AI Workloads',
        html: wrapTemplate(`
            <div style="background: #0f172a; color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin: 0;">LIVE WEBINAR</h2>
                <p style="color: #94a3b8; margin: 10px 0 0;">June 5th, 2026 • 10:00 AM EST</p>
            </div>

            <h2>Join Our Experts</h2>
            <p>Learn how to design and scale data pipelines that can feed modern AI models with high throughput and low latency.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/webinars" class="button">Reserve Your Spot</a>
            </div>
        `, "Webinar Invite")
    },
    {
        id: 'case_study_fintech',
        name: 'Case Study: Fintech 💰',
        subject: 'How Achtrex Scaled a Fintech Platform to 10k RPS',
        html: wrapTemplate(`
            <h2>Enterprise Scaling Success</h2>
            <p>Read how we helped a leading fintech company rebuild their core data infrastructure to handle over 10,000 requests per second securely.</p>
            
            <p>The solution involved a combination of our Global API Gateway, edge processing, and a custom Zero-Trust security layer.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/case-studies/fintech" class="button">Read Case Study</a>
            </div>
        `, "Case Study")
    },
    {
        id: 'product_roadmap',
        name: 'Product Roadmap 🗺️',
        subject: 'Q3 2026 Product Roadmap & Vision',
        html: wrapTemplate(`
            <h2>What's Coming Next</h2>
            <p>We are excited to share our vision for the next quarter. We are focusing on making our platforms even more autonomous and secure.</p>
            
            <h3>Upcoming Features:</h3>
            <ul style="color: #334155; padding-left: 20px;">
                <li><strong>LUMI v2:</strong> Multi-modal agent capabilities.</li>
                <li><strong>Self-Healing Pipelines:</strong> Automatic error recovery in data flows.</li>
            </ul>
            
            <div class="button-container">
                <a href="https://achtrex.com/roadmap" class="button">View Full Roadmap</a>
            </div>
        `, "Product Roadmap")
    },
    {
        id: 'partner_program',
        name: 'Partner Program 🤝',
        subject: 'Join the Achtrex Partner Program',
        html: wrapTemplate(`
            <h2>Grow Your Business with Achtrex</h2>
            <p>Are you a consultant or agency helping enterprises with digital transformation? Partner with Achtrex to offer your clients best-in-class Data and AI solutions.</p>
            
            <p>Get access to exclusive co-marketing opportunities, technical training, and referral rewards.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/partners" class="button">Become a Partner</a>
            </div>
        `, "Partner Program")
    },
    {
        id: 'maintenance_notice',
        name: 'Maintenance Notice ⚠️',
        subject: 'Scheduled Maintenance Notice: Infrastructure Upgrades',
        html: wrapTemplate(`
            <h2>Scheduled Maintenance</h2>
            <p>To ensure the best possible performance and security, we will be performing scheduled maintenance on our core infrastructure.</p>
            
            <div style="background: #fffbe6; border: 1px solid #ffe58f; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0; font-size: 14px; color: #d46b08;"><strong>Window:</strong> Sunday, June 14, 2026 | 01:00 AM - 03:00 AM UTC</p>
            </div>
            
            <p>Expect intermittent connectivity to the dashboard during this window. Public APIs will not be affected.</p>
            
            <div class="button-container">
                <a href="https://status.achtrex.com" class="button">Check Status</a>
            </div>
        `, "Maintenance Notice")
    }
];

