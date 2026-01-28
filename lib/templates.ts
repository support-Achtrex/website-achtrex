
export interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    html: string;
}

const COMMON_STYLES = `
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f9fafb; }
    .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 48px 40px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 28px; letter-spacing: -0.025em; font-weight: 800; }
    .content { padding: 48px 40px; }
    .content h2 { color: #111827; font-size: 20px; font-weight: 700; margin-bottom: 24px; margin-top: 0; }
    .content p { margin-bottom: 20px; }
    .button-container { text-align: center; margin: 40px 0; }
    .button { background-color: #3b82f6; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px; display: inline-block; transition: background-color 0.2s; shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5); }
    .footer { background-color: #f9fafb; padding: 32px 40px; text-align: center; font-size: 13px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0; }
    .feature-card { background-color: #f3f4f6; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; }
    .feature-card h4 { margin: 0 0 8px 0; color: #111827; }
    .feature-card p { margin: 0; font-size: 13px; }
`;

export const EMAIL_TEMPLATES: EmailTemplate[] = [
    {
        id: 'welcome_onboard',
        name: 'Welcome Onboard 🚀',
        subject: 'Welcome to Achtrex - Let’s Build Something Amazing!',
        html: `<!DOCTYPE html><html><head><style>${COMMON_STYLES}</style></head><body>
            <div class="container">
                <div class="header"><h1>Welcome to Achtrex</h1></div>
                <div class="content">
                    <h2>We're thrilled to have you!</h2>
                    <p>Hello! Thank you for choosing Achtrex as your digital partner. We are committed to transforming your ideas into high-performance digital reality.</p>
                    <p>Our team is already preparing to dive into your requirements. We focus on three core pillars:</p>
                    <div class="feature-grid" style="display: table; width: 100%; border-spacing: 12px; border-collapse: separate;">
                        <div style="display: table-cell; background: #f3f4f6; border-radius: 12px; padding: 20px; width: 50%;">
                            <h4 style="margin:0 0 8px 0;">Elite Design</h4>
                            <p style="margin:0; font-size:13px;">Crafting premium interfaces that captivate your users.</p>
                        </div>
                        <div style="display: table-cell; background: #f3f4f6; border-radius: 12px; padding: 20px; width: 50%;">
                            <h4 style="margin:0 0 8px 0;">Clean Code</h4>
                            <p style="margin:0; font-size:13px;">Scalable, secure, and lightning-fast architectural solutions.</p>
                        </div>
                    </div>
                    <p>Next steps: You will receive an invitation to our project management board shortly where we will track every milestone together.</p>
                    <div class="button-container"><a href="#" class="button">Access Client Portal</a></div>
                    <p>Welcome to the future of digital excellence.</p>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.<br>
                    You received this email because you signed up for our services.
                </div>
            </div>
        </body></html>`
    },
    {
        id: 'project_progress',
        name: 'Project Progress Update 📈',
        subject: 'Weekly Progress Report - Your Project Status',
        html: `<!DOCTYPE html><html><head><style>${COMMON_STYLES}</style></head><body>
            <div class="container">
                <div class="header"><h1>Progress Update</h1></div>
                <div class="content">
                    <h2>Things are moving fast!</h2>
                    <p>We've made significant progress on your project this week. Our engineers and designers have been working hard to hit our recent milestones.</p>
                    <div style="background: #eef2ff; border-radius: 16px; padding: 32px; margin: 32px 0; text-align: center; border: 1px solid #c7d2fe;">
                        <div style="font-size: 32px; font-weight: 800; color: #4f46e5; margin-bottom: 8px;">65%</div>
                        <div style="text-transform: uppercase; font-size: 12px; font-weight: 700; color: #6366f1; letter-spacing: 0.1em;">Overall Completion</div>
                        <div style="width: 100%; height: 8px; background: #e0e7ff; border-radius: 4px; margin-top: 16px; overflow: hidden;">
                            <div style="width: 65%; height: 100%; background: #4f46e5;"></div>
                        </div>
                    </div>
                    <h2>Key Achievements:</h2>
                    <ul style="padding-left: 20px; margin-bottom: 24px;">
                        <li style="margin-bottom: 8px;">Completed mobile responsiveness for dashboard</li>
                        <li style="margin-bottom: 8px;">Integrated payment gateway API</li>
                        <li style="margin-bottom: 8px;">Optimized database query performance</li>
                    </ul>
                    <div class="button-container"><a href="#" class="button">View Detail Roadmap</a></div>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
                </div>
            </div>
        </body></html>`
    },
    {
        id: 'project_completion',
        name: 'Completion Handover 🎉',
        subject: 'Your Project is Live! - Handover & Next Steps',
        html: `<!DOCTYPE html><html><head><style>${COMMON_STYLES}</style></head><body>
            <div class="container">
                <div class="header"><h1>Project Completed</h1></div>
                <div class="content">
                    <h2>Congratulations!</h2>
                    <p>Your project is now 100% complete and has been successfully deployed to production. This is just the beginning of your digital growth.</p>
                    <p>We've compiled all the necessary documentation, source code, and assets for your records.</p>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 24px; border-radius: 12px; margin: 24px 0;">
                        <h4 style="color: #166534; margin: 0 0 8px 0;">All Systems Go ✅</h4>
                        <p style="color: #166534; font-size: 14px; margin: 0;">Deployment: Successful | Speed: Optimized | Security: Hardened</p>
                    </div>
                    <p>Our support team will remain available for the next 30 days for any technical adjustments or questions you might have.</p>
                    <div class="button-container"><a href="#" class="button">Download Assets Package</a></div>
                    <p>Thank you for trusting Achtrex with your vision.</p>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
                </div>
            </div>
        </body></html>`
    },
    {
        id: 'follow_up',
        name: 'Client Follow-up 🔍',
        subject: 'Checking In - How can we help?',
        html: `<!DOCTYPE html><html><head><style>${COMMON_STYLES}</style></head><body>
            <div class="container">
                <div class="header"><h1>Checking In</h1></div>
                <div class="content">
                    <h2>How is everything going?</h2>
                    <p>It's been a while since we finished our last phase, and we wanted to check in and see how the solution is performing for you.</p>
                    <p>At Achtrex, we don't just build and leave—we want to ensure our work continues to drive value for your business.</p>
                    <div style="border-left: 4px solid #3b82f6; padding: 16px 24px; background: #f8fafc; margin: 24px 0;">
                        <p style="margin:0; font-style: italic;">"Is there any new feature you've been considering? Or perhaps some maintenance or scaling needed?"</p>
                    </div>
                    <p>We'd love to jump on a quick 15-minute call to discuss your 2026 roadmap.</p>
                    <div class="button-container"><a href="#" class="button">Schedule Quick Chat</a></div>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
                </div>
            </div>
        </body></html>`
    },
    {
        id: 'product_ad',
        name: 'Product Advertisement 🏷️',
        subject: 'New Service Launch: Enterprise Cloud Scaling',
        html: `<!DOCTYPE html><html><head><style>${COMMON_STYLES}</style></head><body>
            <div class="container">
                <div class="header"><h1>New Service Launch</h1></div>
                <div class="content">
                    <h2>Scale Without Limits</h2>
                    <p>We are excited to announce our newest service offering: <strong>Achtrex Enterprise Cloud Scaling</strong>. Designed for businesses that need high availability and zero downtime.</p>
                    <div style="margin: 32px 0;">
                        <img src="https://images.unsplash.com/photo-1451187530270-91a9d4aee878?auto=format&fit=crop&w=600&q=80" style="width: 100%; border-radius: 12px;" />
                    </div>
                    <div class="feature-grid" style="display: table; width: 100%; border-spacing: 12px; border-collapse: separate;">
                        <div style="display: table-cell; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 20px; width: 50%;">
                            <h4 style="margin: 0 0 8px 0; color: #7e22ce;">Auto-Scaling</h4>
                            <p style="margin: 0; font-size: 13px; color: #6b21a8;">Handle traffic spikes effortlessly.</p>
                        </div>
                        <div style="display: table-cell; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 12px; padding: 20px; width: 50%;">
                            <h4 style="margin: 0 0 8px 0; color: #0f766e;">Edge Optimization</h4>
                            <p style="margin: 0; font-size: 13px; color: #115e59;">Globally fast content delivery.</p>
                        </div>
                    </div>
                    <p>As a valued client, we are offering you a <strong>20% discount</strong> on your first 3 months if you sign up this month.</p>
                    <div class="button-container"><a href="#" class="button">Claim Your Discount</a></div>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Achtrex. All rights reserved.
                </div>
            </div>
        </body></html>`
    }
];
