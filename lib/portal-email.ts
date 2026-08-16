import nodemailer from 'nodemailer';

interface NewMemberProjectEmailData {
  memberName: string;
  memberEmail: string;
  memberCompany?: string;
  memberPhone?: string;
  projectTitle: string;
  serviceType: string;
  budget?: string;
  description: string;
}

export async function sendPortalSignupAndProjectEmail(data: NewMemberProjectEmailData) {
  try {
    const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
    const smtpPassword = process.env.SMTP_PASS || 'krsg kvyz zlzo bnax';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpEmail,
        pass: smtpPassword
      }
    });

    // 1. Send Admin Notification Email
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
        <div style="background: linear-gradient(135deg, #0263c6 0%, #00a9ce 100%); padding: 32px 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">ACHTREX PLATFORM</h1>
          <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 500;">New Member Registration & Project Request</p>
        </div>
        
        <div style="padding: 28px 24px;">
          <div style="background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid #334155;">
            <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px;">👤 Client Details</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; width: 120px;">Name:</td>
                <td style="padding: 6px 0; color: #ffffff; font-weight: 600;">${data.memberName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8;">Email:</td>
                <td style="padding: 6px 0; color: #38bdf8; font-weight: 600;"><a href="mailto:${data.memberEmail}" style="color: #38bdf8; text-decoration: none;">${data.memberEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8;">Company:</td>
                <td style="padding: 6px 0; color: #ffffff;">${data.memberCompany || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8;">Phone:</td>
                <td style="padding: 6px 0; color: #ffffff;">${data.memberPhone || 'N/A'}</td>
              </tr>
            </table>
          </div>

          <div style="background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #334155;">
            <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px;">🚀 Project Scope & Request</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; width: 120px;">Project Title:</td>
                <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">${data.projectTitle}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8;">Solution Type:</td>
                <td style="padding: 6px 0; color: #34d399; font-weight: 600;">${data.serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8;">Budget Range:</td>
                <td style="padding: 6px 0; color: #fbbf24; font-weight: 600;">${data.budget || 'Custom Scope'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 16px; pt-3; border-top: 1px solid #334155;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8; font-weight: 600;">Scope & Requirements:</p>
              <div style="background: #0f172a; border-radius: 8px; padding: 14px; color: #e2e8f0; font-size: 14px; line-height: 1.6; border: 1px solid #334155;">
                ${data.description.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://achtrex.com/admin/projects" style="display: inline-block; background: linear-gradient(135deg, #0263c6 0%, #00a9ce 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; font-weight: 700; font-size: 14px; border-radius: 9999px; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(2, 99, 198, 0.4);">
              View & Update Project in Admin Dashboard →
            </a>
          </div>
        </div>

        <div style="background: #090d16; padding: 16px; text-align: center; border-top: 1px solid #1e293b;">
          <p style="margin: 0; font-size: 12px; color: #64748b;">Achtrex Enterprise Platform • support@achtrex.com</p>
        </div>
      </div>
    `;

    // 2. Send Client Confirmation Welcome Email
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #001a22 0%, #002b38 100%); padding: 36px 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">ACHTREX PLATFORM</h1>
          <p style="margin: 8px 0 0 0; color: #38bdf8; font-size: 15px; font-weight: 600;">Welcome to Your Members Portal</p>
        </div>

        <div style="padding: 32px 24px;">
          <p style="font-size: 16px; line-height: 1.6; color: #1e293b; margin-top: 0;">
            Hello <strong>${data.memberName}</strong>,
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #475569;">
            Thank you for accessing the Achtrex platform and submitting your project request for <strong>${data.projectTitle}</strong>.
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #475569;">
            Our engineering team is now reviewing your technical requirements. Your dedicated members area has been activated with your <strong>live interactive system architecture diagram</strong> and <strong>project deliverables cart</strong>.
          </p>

          <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #e2e8f0;">
            <h3 style="margin: 0 0 12px 0; font-size: 15px; color: #0f172a;">What you can do in your Members Area:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
              <li><strong>Track Live Progress:</strong> Monitor real-time status and engineering milestones.</li>
              <li><strong>Architecture Diagramming:</strong> View and interact with your custom cloud & microservice architecture.</li>
              <li><strong>Scope & Deliverables Cart:</strong> Review included modules and request optional add-ons.</li>
              <li><strong>Direct Updates Feed:</strong> Receive live technical updates from your solutions architect.</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 32px 0 16px 0;">
            <a href="https://achtrex.com/portal/dashboard" style="display: inline-block; background: #001a22; color: #ffffff; text-decoration: none; padding: 14px 32px; font-weight: 700; font-size: 14px; border-radius: 9999px; letter-spacing: 0.5px;">
              Go to Your Members Dashboard →
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 6px 0; font-size: 13px; color: #64748b; font-weight: 600;">Need immediate assistance?</p>
          <p style="margin: 0; font-size: 13px; color: #64748b;">Contact us at <a href="mailto:support@achtrex.com" style="color: #0263c6; text-decoration: none;">support@achtrex.com</a> or call <a href="tel:+16133664271" style="color: #0263c6; text-decoration: none;">+1 (613) 366-4271</a></p>
        </div>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Achtrex Platform" <${smtpEmail}>`,
      to: 'support@achtrex.com',
      replyTo: data.memberEmail,
      subject: `🚀 New Project Request: ${data.projectTitle} (${data.memberName})`,
      html: adminHtml,
    });

    // Send Client Confirmation Email
    try {
      await transporter.sendMail({
        from: `"Achtrex Solutions" <${smtpEmail}>`,
        to: data.memberEmail,
        subject: `Welcome to Achtrex - Project ${data.projectTitle} Initialized`,
        html: clientHtml,
      });
    } catch (clientErr) {
      console.warn('Client confirmation email failed to send:', clientErr);
    }

    console.log(`Portal signup emails sent for ${data.memberEmail}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending portal emails:', error);
    return { success: false, error };
  }
}
