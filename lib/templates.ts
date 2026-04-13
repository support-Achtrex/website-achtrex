
export interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    html: string;
}

const COMMON_STYLES = `
    /* Base Reset */
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f3f4f6; }
    
    /* Layout */
    .wrapper { width: 100%; table-layout: fixed; background-color: #f3f4f6; padding-bottom: 40px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
    
    /* Header */
    .header { background: #111827; padding: 40px; text-align: center; background-image: linear-gradient(to bottom right, #111827, #1f2937); }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; font-weight: 700; text-transform: uppercase; }
    .header-logo { font-size: 32px; font-weight: 800; color: #0ea5e9; text-decoration: none; display: inline-block; margin-bottom: 10px; }
    
    /* Content */
    .content { padding: 40px; background-color: #ffffff; }
    .content h2 { color: #111827; font-size: 22px; font-weight: 700; margin-bottom: 20px; margin-top: 0; line-height: 1.3; }
    .content p { margin-bottom: 20px; color: #4b5563; font-size: 16px; }
    .content strong { color: #1f2937; font-weight: 600; }
    
    /* Buttons */
    .button-container { text-align: center; margin: 35px 0; }
    .button { 
        background-color: #0ea5e9; 
        color: #ffffff !important; 
        padding: 16px 32px; 
        border-radius: 8px; 
        text-decoration: none; 
        font-weight: 600; 
        font-size: 16px; 
        display: inline-block; 
        box-shadow: 0 4px 6px rgba(14, 165, 233, 0.25);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .button:hover { background-color: #0284c7; transform: translateY(-1px); box-shadow: 0 6px 8px rgba(14, 165, 233, 0.3); }
    
    /* Footer */
    .footer { background-color: #f9fafb; padding: 30px 40px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    .footer a { color: #0ea5e9; text-decoration: none; }
    
    /* Utilities */
    .divider { height: 1px; background-color: #e5e7eb; margin: 30px 0; border: none; }
    .text-center { text-align: center; }
    .text-small { font-size: 14px; }
    .highlight-box { background: #f0f9ff; border: 1px solid #bae6fd; padding: 24px; border-radius: 8px; margin: 24px 0; }
    
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
                    <a href="https://achtrex.com" class="header-logo">ACHTREX</a>
                    <h1>${title}</h1>
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
                        <a href="https://achtrex.com/unsubscribe" style="color:#9ca3af; text-decoration: underline;">Unsubscribe</a>
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
        name: 'Welcome Onboard 🚀',
        subject: 'Welcome to Achtrex - Let’s Build Something Amazing!',
        html: wrapTemplate(`
            <h2>We're thrilled to have you!</h2>
            <p>Hello! Thank you for choosing Achtrex as your digital partner. We are committed to transforming your ideas into high-performance digital reality.</p>
            <p>Our team is already preparing to dive into your requirements. We focus on three core pillars to ensure your success:</p>
            
            <div class="grid-2">
                <div class="col-2" style="background: #f8fafc; border-radius: 8px; padding: 20px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png" width="40" style="margin-bottom: 10px; opacity: 0.8;">
                    <h4 style="margin:0 0 5px 0; color:#1e293b;">Elite Design</h4>
                    <p style="margin:0; font-size:13px; line-height:1.4;">Premium interfaces that captivate users.</p>
                </div>
                <div class="col-2" style="background: #f8fafc; border-radius: 8px; padding: 20px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" width="40" style="margin-bottom: 10px; opacity: 0.8;">
                    <h4 style="margin:0 0 5px 0; color:#1e293b;">Clean Code</h4>
                    <p style="margin:0; font-size:13px; line-height:1.4;">Scalable, secure, and fast architectures.</p>
                </div>
            </div>

            <p style="margin-top: 25px;">Next steps: You will receive an invitation to our project management board shortly where we will track every milestone together.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/login" class="button">Access Client Portal</a>
            </div>
            
            <p style="text-align: center; color: #6b7280; font-style: italic;">Welcome to the future of digital excellence.</p>
        `, "Welcome to Achtrex")
    },
    {
        id: 'weekly_update',
        name: 'Weekly Progress 📈',
        subject: 'Weekly Progress Report - Your Project Status',
        html: wrapTemplate(`
            <h2>Things are moving fast!</h2>
            <p>We've made significant progress on your project this week. Our engineers and designers have been working hard to hit our recent milestones.</p>
            
            <div class="highlight-box" style="text-align: center;">
                <div style="font-size: 48px; font-weight: 800; color: #4f46e5; line-height: 1;">65%</div>
                <div style="text-transform: uppercase; font-size: 12px; font-weight: 700; color: #6366f1; letter-spacing: 1px; margin-top: 5px;">Overall Completion</div>
                <div style="width: 100%; height: 6px; background: #e0e7ff; border-radius: 99px; margin-top: 20px; overflow: hidden;">
                    <div style="width: 65%; height: 100%; background: #4f46e5;"></div>
                </div>
            </div>

            <h3>Key Achievements This Week:</h3>
            <ul style="padding-left: 20px; color: #4b5563;">
                <li style="margin-bottom: 10px;"><strong>Dashboard UI:</strong> Completed mobile responsiveness adjustments.</li>
                <li style="margin-bottom: 10px;"><strong>Backend:</strong> Successfully integrated initial payment gateway.</li>
                <li style="margin-bottom: 10px;"><strong>Performance:</strong> Optimized database query speeds by 40%.</li>
            </ul>

            <div class="button-container">
                <a href="https://achtrex.com/login?view=roadmap" class="button">View Detailed Roadmap</a>
            </div>
        `, "Progress Update")
    },
    {
        id: 'project_handover',
        name: 'Completion Handover 🎉',
        subject: 'Your Project is Live! - Handover & Next Steps',
        html: wrapTemplate(`
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://cdn-icons-png.flaticon.com/512/7641/7641624.png" width="80" alt="Success">
            </div>
            <h2 style="text-align: center;">Congratulations!</h2>
            <p>Your project is now <strong>100% complete</strong> and has been successfully deployed to production. This is just the beginning of your digital growth.</p>
            
            <p>We've compiled all the necessary documentation, source code, and assets for your records.</p>
            
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 24px; border-radius: 8px; margin: 24px 0;">
                <h4 style="color: #15803d; margin: 0 0 10px 0; font-size: 18px;">All Systems Go ✅</h4>
                <div style="display: flex; justify-content: space-between; font-size: 14px; color: #166534;">
                    <span>Deployment: <strong>Successful</strong></span>
                    <span>Speed: <strong>Optimized</strong></span>
                    <span>Security: <strong>Hardened</strong></span>
                </div>
            </div>

            <p>Our support team will remain available for the next 30 days for any technical adjustments or questions you might have.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/files/download" class="button">Download Assets Package</a>
            </div>
            
            <p style="text-align: center;">Thank you for trusting Achtrex with your vision.</p>
        `, "Project Live")
    },
    {
        id: 'check_in',
        name: 'Client Follow-up 🔍',
        subject: 'Checking In - How can we help?',
        html: wrapTemplate(`
            <h2>How is everything going?</h2>
            <p>It's been a while since we finished our last phase, and we wanted to check in and see how the solution is performing for you.</p>
            <p>At Achtrex, we don't just build and leave - we want to ensure our work continues to drive value for your business.</p>
            
            <div style="border-left: 4px solid #0ea5e9; padding: 16px 24px; background: #f0f9ff; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <p style="margin:0; font-style: italic; color: #0369a1;">"Is there any new feature you've been considering? Or perhaps some maintenance or scaling needed?"</p>
            </div>

            <p>We'd love to jump on a quick 15-minute call to discuss your 2026 roadmap and see how we can assist.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/contact-us" class="button">Schedule Quick Chat</a>
            </div>
        `, "Checking In")
    },
    {
        id: 'new_service_launch',
        name: 'Service Launch 🏷️',
        subject: 'New: Enterprise Cloud Scaling Solutions',
        html: wrapTemplate(`
            <h2>Scale Without Limits</h2>
            <p>We are excited to announce our newest service offering: <strong>Achtrex Enterprise Cloud Scaling</strong>. Designed for businesses that need high availability and zero downtime.</p>
            
            <img src="https://images.unsplash.com/photo-1451187530270-91a9d4aee878?auto=format&fit=crop&w=600&q=80" style="width: 100%; border-radius: 8px; margin: 20px 0; display: block;" alt="Cloud Space">
            
            <div class="grid-2">
                <div class="col-2" style="padding-right: 10px;">
                    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 20px; height: 100%;">
                        <h4 style="margin: 0 0 8px 0; color: #7e22ce;">Auto-Scaling</h4>
                        <p style="margin: 0; font-size: 13px; color: #6b21a8;">Handle traffic spikes effortlessly with our new AI balancer.</p>
                    </div>
                </div>
                <div class="col-2" style="padding-left: 10px;">
                    <div style="background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 20px; height: 100%;">
                        <h4 style="margin: 0 0 8px 0; color: #0f766e;">Edge Opt.</h4>
                        <p style="margin: 0; font-size: 13px; color: #115e59;">Globally fast content delivery network integration.</p>
                    </div>
                </div>
            </div>

            <p style="margin-top: 25px;">As a valued client, we are offering you a <strong>20% discount</strong> on your first 3 months if you sign up this month.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/services/cloud" class="button">Claim Discount</a>
            </div>
        `, "New Service")
    },
    {
        id: 'newsletter_tech_trends',
        name: 'Newsletter: Tech Trends 📰',
        subject: 'The Future of Web Development in 2026',
        html: wrapTemplate(`
            <h2>What's Next in Tech?</h2>
            <p>The digital landscape is shifting rapidly. At Achtrex, we keep a pulse on the industry so you don't have to. Here are the top 3 trends dominating this quarter:</p>
            
            <div style="margin: 30px 0;">
                <div style="margin-bottom: 25px;">
                    <h3 style="margin: 0 0 5px; color: #0ea5e9;">1. AI-Driven Interfaces</h3>
                    <p style="margin: 0; font-size: 14px;">User experiences that adapt in real-time based on behavior are becoming the new standard.</p>
                </div>
                <div style="margin-bottom: 25px;">
                    <h3 style="margin: 0 0 5px; color: #0ea5e9;">2. Server-Side Efficiency</h3>
                    <p style="margin: 0; font-size: 14px;">With edge computing, applications are faster and more reliable than ever before.</p>
                </div>
                <div style="margin-bottom: 25px;">
                    <h3 style="margin: 0 0 5px; color: #0ea5e9;">3. Enhanced Security</h3>
                    <p style="margin: 0; font-size: 14px;">Zero-trust architectures are moving from enterprise-only to mainstream application requirements.</p>
                </div>
            </div>
            
            <p>Want to see how these apply to your business?</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/blog/2026-trends" class="button">Read Full Article</a>
            </div>
        `, "Tech Trends")
    },
    {
        id: 'webinar_invite',
        name: 'Webinar Invitation 🎥',
        subject: 'Inviting you: "The Future of AI in Software"',
        html: wrapTemplate(`
            <div style="background: #1e293b; color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin: 0;">LIVE WEBINAR</h2>
                <p style="color: #94a3b8; margin: 10px 0 0;">February 15th, 2026 • 2:00 PM EST</p>
            </div>

            <h2>You're Invited!</h2>
            <p>Join our Lead Architect, <strong>David Chen</strong>, as he breaks down the practical applications of AI in modern software development.</p>
            
            <h3>In this session, we will cover:</h3>
            <ul style="color: #4b5563;">
                <li>Automating mundane workflows</li>
                <li>AI for predictive analytics</li>
                <li>Ethical considerations in AI deployment</li>
            </ul>
            
            <p>Spaces are limited to ensure a quality Q&A session at the end.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/webinars/ai-future" class="button">Reserve Your Spot</a>
            </div>
        `, "Exclusive Webinar")
    },
    {
        id: 'case_study_spotlight',
        name: 'Case Study Spotlight 🏆',
        subject: 'How we helped Carkasa increase traffic by 200%',
        html: wrapTemplate(`
            <h2>Real Results for Real Business</h2>
            <p>We love sharing our success stories. Recently, we partnered with <strong>Carkasa</strong> to revamp their digital presence. The results were outstanding.</p>
            
            <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 25px 0;">
                <img src="https://achtrex.com/projects/carkasa-mockup-blue.png" style="width: 100%; height: auto; display: block;" alt="Carkasa Project">
                <div style="padding: 20px;">
                    <div class="grid-2">
                        <div class="col-2" style="text-align: center;">
                            <h3 style="margin:0; font-size: 24px; color: #10b981;">+200%</h3>
                            <p style="margin:0; font-size: 12px; text-transform: uppercase;">Traffic Growth</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <h3 style="margin:0; font-size: 24px; color: #10b981;">-45%</h3>
                            <p style="margin:0; font-size: 12px; text-transform: uppercase;">Load Time</p>
                        </div>
                    </div>
                </div>
            </div>

            <p>Read the full story on how we achieved these metrics through strategic UX/UI design and robust engineering.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/portfolio/carkasa" class="button">Read Case Study</a>
            </div>
        `, "Case Study")
    },
    {
        id: 'seasonal_offer',
        name: 'Seasonal Offer 🎁',
        subject: 'End of Year Development Audit - 50% Off',
        html: wrapTemplate(`
            <h2>Prepare for a Strong Year</h2>
            <p>As the year comes to a close, it's the perfect time to review your digital infrastructure. Ensure your applications are secure, fast, and ready for the year ahead.</p>
            
            <div style="background: linear-gradient(to right, #0ea5e9, #2563eb); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0;">
                <h3 style="margin: 0; font-size: 28px; color:white;">50% OFF</h3>
                <p style="margin: 5px 0 0; color: #bfdbfe;">Comprehensive Tech Audit</p>
                <div style="margin-top: 15px; background: rgba(255,255,255,0.2); display: inline-block; padding: 5px 15px; border-radius: 4px; font-family: monospace;">CODE: AUDIT2026</div>
            </div>
            
            <p><strong>Offer ends December 31st.</strong> Don't miss this chance to optimize your business at a fraction of the cost.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/contact-us?subject=Audit" class="button">Book Your Audit</a>
            </div>
        `, "Special Offer")
    },
    {
        id: 'referral_program',
        name: 'Referral Program 🤝',
        subject: 'Refer a friend, get $500 credit',
        html: wrapTemplate(`
            <h2>Love working with Achtrex?</h2>
            <p>The best compliment we can receive is a referral. Do you know other business owners looking to upgrade their digital presence?</p>
            
            <div style="display: flex; align-items: center; background: #fdf2f8; border: 1px solid #fbcfe8; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <div style="font-size: 40px; margin-right: 20px;">🎁</div>
                <div>
                    <h4 style="margin: 0 0 5px 0; color: #be185d;">Give $500, Get $500</h4>
                    <p style="margin: 0; font-size: 13px; color: #9d174d;">When you refer a client who signs a contract, you BOTH receive a $500 service credit.</p>
                </div>
            </div>
            
            <p>It's simple. Just introduce us, and we'll handle the rest.</p>
            
            <div class="button-container">
                <a href="mailto:support@achtrex.com?subject=Referral" class="button">Make a Referral</a>
            </div>
        `, "Referral Program")
    },
    {
        id: 'system_maintenance',
        name: 'System Maintenance ⚠️',
        subject: 'Scheduled Maintenance Notice: Feb 20',
        html: wrapTemplate(`
            <h2>Scheduled Maintenance</h2>
            <p>To ensure the best possible performance and security for your services, we will be performing scheduled maintenance on our infrastructure.</p>
            
            <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 20px; margin: 25px 0;">
                <strong style="display: block; color: #c2410c; margin-bottom: 5px;">Maintenance Window:</strong>
                <p style="margin: 0; font-size: 14px;">Date: Saturday, February 20, 2026<br>Time: 02:00 AM - 04:00 AM UTC<br>Expected Duration: 2 Hours</p>
            </div>
            
            <p>During this time, you may experience brief intermittent connectivity to your dashboard. No end-user public traffic will be affected.</p>
            <p>We appreciate your patience as we make these upgrades.</p>
            
            <div class="button-container">
                <a href="https://status.achtrex.com" style="color: #6b7280; text-decoration: underline; font-size: 14px;">Check System Status</a>
            </div>
        `, "System Notice")
    },
    {
        id: 'feedback_request',
        name: 'Feedback Request 📝',
        subject: 'We value your opinion - Quick Survey',
        html: wrapTemplate(`
            <h2>Help us serve you better</h2>
            <p>We are constantly striving to improve our services and your experience. Would you mind sparing 2 minutes to share your thoughts?</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <p style="margin-bottom: 10px; font-weight: bold;">How likely are you to recommend Achtrex?</p>
                <div style="display: inline-flex; gap: 10px;">
                    <a href="https://achtrex.com/survey?score=10" style="padding: 10px 15px; background: #ecfdf5; color: #059669; border-radius: 4px; text-decoration: none; border: 1px solid #d1fae5;">10</a>
                    <a href="https://achtrex.com/survey?score=9" style="padding: 10px 15px; background: #ecfdf5; color: #059669; border-radius: 4px; text-decoration: none; border: 1px solid #d1fae5;">9</a>
                    <a href="https://achtrex.com/survey?score=8" style="padding: 10px 15px; background: #ecfdf5; color: #059669; border-radius: 4px; text-decoration: none; border: 1px solid #d1fae5;">8</a>
                </div>
            </div>
            
            <p>Your honest feedback helps us shape the future of our product roadmap.</p>
            
            <div class="button-container">
                <a href="https://achtrex.com/feedback" class="button">Take Full Survey</a>
            </div>
        `, "Feedback Request")
    },
    {
        id: 'new_team_member',
        name: 'Team Announcement 👋',
        subject: 'Welcome Sarah, our new Head of Design',
        html: wrapTemplate(`
            <h2>Growing our Family</h2>
            <p>We are excited to announce a new addition to the Achtrex leadership team. Please join us in welcoming <strong>Sarah Jenkins</strong> as our new Head of Product Design.</p>
            
            <div style="display: flex; gap: 20px; align-items: center; margin: 30px 0;">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" width="80" height="80" style="border-radius: 50%; object-fit: cover;" alt="Sarah Jenkins">
                <div>
                    <h4 style="margin: 0 0 5px 0;">Sarah Jenkins</h4>
                    <p style="margin: 0; font-size: 13px; color: #6b7280;">Formerly Lead Designer at TechCorp. Sarah brings 10+ years of experience in crafting user-centric digital experiences.</p>
                </div>
            </div>
            
            <p>Sarah will be overseeing all client design projects starting next month, ensuring we continue to deliver world-class aesthetics.</p>
            
            <div class="button-container">
                <a href="https://linkedin.com/in/example" class="button" style="background: #0077b5;">Connect on LinkedIn</a>
            </div>
        `, "Team Update")
    },
    {
        id: 'blog_roundup',
        name: 'Blog Round-Up 📚',
        subject: 'Topreads: AI, React 19, and More',
        html: wrapTemplate(`
            <h2>This Month's Top Reads</h2>
            <p>Missed our latest articles? We've curated the most popular posts from our engineering blog this month.</p>
            
            <div style="margin: 25px 0;">
                <a href="https://achtrex.com/blog/react-19" style="text-decoration: none; display: block; margin-bottom: 20px;">
                    <strong style="color: #0ea5e9; font-size: 18px;">React 19: All You Need to Know</strong>
                    <p style="color: #4b5563; font-size: 14px; margin-top: 5px;">A deep dive into the new compiler and server actions...</p>
                </a>
                <div class="divider"></div>
                <a href="https://achtrex.com/blog/ai-ethics" style="text-decoration: none; display: block; margin-bottom: 20px;">
                    <strong style="color: #0ea5e9; font-size: 18px;">The Ethics of Generative AI</strong>
                    <p style="color: #4b5563; font-size: 14px; margin-top: 5px;">How to balance innovation with responsibility...</p>
                </a>
                <div class="divider"></div>
                <a href="https://achtrex.com/blog/css-tricks" style="text-decoration: none; display: block;">
                    <strong style="color: #0ea5e9; font-size: 18px;">5 CSS Tricks for Modern Layouts</strong>
                    <p style="color: #4b5563; font-size: 14px; margin-top: 5px;">Grid, Flexbox, and Subgrid explained in simple terms...</p>
                </a>
            </div>
            
            <div class="button-container">
                <a href="https://achtrex.com/blog" class="button">Visit Blog</a>
            </div>
        `, "Monthly Digest")
    }
];

