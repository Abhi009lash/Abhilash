import nodemailer from 'nodemailer';

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body: ContactPayload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'First name, email, and message are required.' });
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!user || !pass) {
      console.warn('SMTP credentials not configured in environment variables.');
      return res.status(200).json({
        success: true,
        message: 'Message processed (configure SMTP_USER and SMTP_PASS in Vercel for real delivery).',
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const fullName = `${firstName} ${lastName || ''}`.trim();

    await transporter.sendMail({
      from: `"${fullName}" <${user}>`,
      replyTo: email,
      to: receiver,
      subject: `New Portfolio Inquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #ea580c; margin-top: 0; font-size: 20px; font-weight: 700; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px;">
            New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${phone || 'Not provided'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
            <p style="margin-top: 0; margin-bottom: 8px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message</p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({
      error: 'Failed to send message via Nodemailer.',
      details: error?.message || 'Server error',
    });
  }
}
